import { protocol } from "./message";
import Long from "long";
import { Buffer } from "buffer";
import TokenService from "../../service/TokenService";
import Service from "@/app/service/StorageService";

const {
  UpMsg,
  Input,
  Output,
  Message,
  LoginMsg,
  ACKMsg,
  SyncInputMsg,
  SyncOutputMsg,
  CmdType,
  SessionType,
  MessageType,
  ACKType,
} = protocol;

interface ChatMessage {
  id: any; // 消息的唯一标识
  senderId: any; // 发送者 ID
  receiverId: any; // 接收者 ID
  content: any; // 消息内容
  sessionType: any; // 会话类型 (1 单聊, 2 群聊)
  messageType: any; // 消息类型 (1 文本, 2 图片, 3 语音)
  timestamp: any; // 发送时间戳
}

type MessageHandler = (message: ChatMessage) => void;
type ConnectionHandler = (status: boolean) => void;

export class WebSocketService {
  private static instance: WebSocketService;
  private ws: WebSocket | null = null;
  private reconnectAttempt = 0;
  private reconnectTimeout: NodeJS.Timeout | null = null;
  private messageHandlers: Set<MessageHandler> = new Set();
  private connectionHandlers: Set<ConnectionHandler> = new Set();
  private heartbeatInterval: NodeJS.Timeout | null = null;
  private readonly WEBSOCKET_URL = "ws://47.113.118.26:9091/ws";
  private currentToken: string = "";

  private constructor() {}

  public static getInstance(): WebSocketService {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  // 提供一个公共方法来获取 WebSocket 是否连接
  public isConnected(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  public addMessageHandler(handler: MessageHandler) {
    this.messageHandlers.add(handler);
  }

  public removeMessageHandler(handler: MessageHandler) {
    this.messageHandlers.delete(handler);
  }

  public addConnectionHandler(handler: ConnectionHandler) {
    this.connectionHandlers.add(handler);
  }

  public removeConnectionHandler(handler: ConnectionHandler) {
    this.connectionHandlers.delete(handler);
  }

  private notifyConnectionStatus(status: boolean) {
    this.connectionHandlers.forEach((handler) => handler(status));
  }

  private notifyMessage(message: ChatMessage) {
    this.messageHandlers.forEach((handler) => handler(message));
  }

  public async connect(token: string): Promise<void> {
    if (this.ws?.readyState === WebSocket.OPEN) return;
  
    this.currentToken = token;
    console.log("token = " + token);
    this.notifyConnectionStatus(false);
  
    return new Promise((resolve, reject) => {
      try {
        this.ws = new WebSocket(this.WEBSOCKET_URL);
  
        this.ws.onopen = async () => {
          try {
            console.log("WebSocket connected");
            this.notifyConnectionStatus(true);
            await this.sendLoginMessage(this.currentToken);
            this.startHeartbeat();
            resolve();
          } catch (error) {
            reject(error);
          }
        };
  
        this.ws.onmessage = this.handleMessage.bind(this);
  
        this.ws.onerror = (error) => {
          console.error("WebSocket error:", error);
          this.notifyConnectionStatus(false);
          reject(error);
        };
  
        this.ws.onclose = (event) => {
          this.handleClose(event);
          // 只有在连接还没建立成功时才reject
          if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            reject(new Error("WebSocket closed before connection established"));
          }
        };
  
        // 添加超时处理
        const timeout = setTimeout(() => {
          if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            this.ws?.close();
            reject(new Error("WebSocket connection timeout"));
          }
          clearTimeout(timeout);
        }, 10000); // 10秒超时
        
      } catch (error) {
        reject(error);
      }
    });
  }

  private async sendLoginMessage(token: string) {
    try {
      const loginMsg = LoginMsg.create({
        token: new TextEncoder().encode(token),
      });

      const loginInput = Input.create({
        type: CmdType.CT_Login,
        data: LoginMsg.encode(loginMsg).finish(),
      });

      this.send(Input.encode(loginInput).finish());
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  // 同步消息
  public async sendSyncMessage(seq: number) {
    console.log("同步消息");
    const syncMsg = SyncInputMsg.create({
      seq: Long.fromNumber(seq),
    });

    const syncInput = Input.create({
      type: CmdType.CT_Sync,
      data: SyncInputMsg.encode(syncMsg).finish(),
    });

    this.send(Input.encode(syncInput).finish());
  }

  private async handleMessage(event: MessageEvent) {
    try {
      const buffer = new Uint8Array(Buffer.from(event.data, "base64"));
      const output = Output.decode(buffer);

      console.log("收到message:", JSON.stringify(output, null, 2));

      if (output.code !== 200) {
        console.error("Server error:", output.codeMsg);
        return;
      }

      switch (output.type) {
        case CmdType.CT_Message: {
          const pushMsg = Message.decode(output.data);
          const content = Buffer.from(pushMsg.content).toString("utf8");

          const message: ChatMessage = {
            id: String(pushMsg.seq),
            sessionType: pushMsg.sessionType,
            receiverId: String(pushMsg.receiverId),
            senderId: String(pushMsg.senderId),
            messageType: pushMsg.messageType,
            content: content,
            timestamp: this.longToNumber(pushMsg.sendTime),
          };

          this.notifyMessage(message);
          this.sendACK(Long.fromValue(pushMsg.seq));
          break;
        }
        case CmdType.CT_Sync: {
          const syncOutput = SyncOutputMsg.decode(output.data);
          console.log("syncoutput解码为", JSON.stringify(syncOutput, null, 2));
        
          // 使用 Map 来给每个会话维护一个 Promise 队列
          const sessionPromises = new Map<string, Promise<void>>();
        
          // 创建存储操作的 Promise 数组
          const storePromises = syncOutput.messages.map(async (msg) => {
            const message: ChatMessage = {
              id: String(msg.seq),
              sessionType: msg.sessionType,
              receiverId: msg.receiverId,
              senderId: msg.senderId,
              messageType: msg.messageType,
              content: msg.content
                ? Buffer.from(msg.content).toString("utf8")
                : "",
              timestamp: this.longToNumber(msg.sendTime ?? 0),
            };
        
            console.log("syncmsg解码为", JSON.stringify(message, null, 2));
        
            // 获取存储键
            const storageKey = Service.getInstance().getMessageStorageKey(message);
            
            // 获取或创建该会话的 Promise 链
            let sessionPromise = sessionPromises.get(storageKey) || Promise.resolve();
            
            // 创建新的存储操作并添加到链中
            sessionPromise = sessionPromise.then(async () => {
              await Service.getInstance().storeMessage(message);
            });
        
            // 更新 Promise 链
            sessionPromises.set(storageKey, sessionPromise);
            
            // 返回当前操作的 Promise
            return sessionPromise;
          });
        
          // 等待所有消息存储完成
          await Promise.all(storePromises);
        
          // 获取最后一条消息的 seq
          if (syncOutput.messages.length > 0) {
            const lastSeq = syncOutput.messages[syncOutput.messages.length - 1].seq as number;
            const tokenService = TokenService.getInstance();
            const CURRENT_USER_ID = await tokenService.getValue("CURRENT_USER_ID") as string;
            const newSeq = await Service.getInstance().setSeq(CURRENT_USER_ID, lastSeq);
            console.log("new seq = " + newSeq + " last = " + lastSeq);
          }
        
          break;
        }
      }
    } catch (error) {
      console.error("Message processing error:", error);
    }
  }

  private handleClose(event: CloseEvent) {
    console.log("WebSocket closed:", event.code, event.reason);
    this.notifyConnectionStatus(false);
    this.stopHeartbeat();

    if (event.code !== 1000) {
      const timeout = Math.min(
        1000 * Math.pow(2, this.reconnectAttempt),
        30000
      );
      this.reconnectTimeout = setTimeout(async () => {
        this.reconnectAttempt++;
        const tokenService = TokenService.getInstance();
        const token = await tokenService.getToken();
        if (token) {
          this.connect(token);
        }
      }, timeout);
    }
  }

  private sendACK(seq: Long) {
    const ackMsg = ACKMsg.create({
      type: ACKType.AT_Push,
      seq: seq,
    });

    const ackInput = Input.create({
      type: CmdType.CT_ACK,
      data: ACKMsg.encode(ackMsg).finish(),
    });

    this.send(Input.encode(ackInput).finish());
  }

  public async sendMessage(
    receiverId: number,
    content: string,
    clientId: number,
    seq: number,
  ) {
    const tokenService = TokenService.getInstance();
    const currentUserId =
      await tokenService.getValue<number>("CURRENT_USER_ID");
    if (!currentUserId) {
      throw new Error("User ID not found");
    }
    console.log('当前用户:'+currentUserId+' seq = '+seq+' 接收者:'+receiverId);

    const message = Message.create({
      sessionType: SessionType.ST_Single,
      receiverId: Long.fromNumber(receiverId),
      senderId: Long.fromNumber(currentUserId),
      messageType: MessageType.MT_Text,
      content: new TextEncoder().encode(content),
      seq: seq,
      sendTime: Long.fromNumber(Date.now()/1000),
    });

    const upMsg = {
      clientId,
      msg: message,
    };

    const encodedMessage = UpMsg.encode(upMsg).finish();
    const messageInput = Input.create({
      type: CmdType.CT_Message,
      data: encodedMessage,
    });

    this.send(Input.encode(messageInput).finish());

    return {
      id: String(message.seq),
      senderId: String(message.senderId),
      receiverId: String(message.receiverId),
      sessionType: message.sessionType,
      messageType: message.messageType,
      content: content,
      timestamp: this.longToNumber(message.sendTime),
    };
  }

  private send(data: Uint8Array) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(data);
    } else {
      console.error("WebSocket is not connected");
    }
  }

  private startHeartbeat() {
    this.heartbeatInterval = setInterval(() => {
      const heartbeatInput = Input.create({
        type: CmdType.CT_Heartbeat,
        data: new Uint8Array(),
      });
      this.send(Input.encode(heartbeatInput).finish());
    }, 30000);
  }

  private stopHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }

  public disconnect() {
    this.stopHeartbeat();
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = null;
    }
    if (this.ws) {
      this.ws.close(1000, "Disconnecting");
      this.ws = null;
    }
    this.reconnectAttempt = 0;
  }

  private longToNumber(value: Long | number): number {
    if (typeof value === "number") {
      return value;
    }
    return value.toNumber();
  }
}

export default WebSocketService;
