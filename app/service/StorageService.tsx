import AsyncStorage from "@react-native-async-storage/async-storage";
import { protocol } from "../pages/chat/message";

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
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  sessionType: number;
  messageType: number;
  timestamp: number;
}

class Service {
  private static instance: Service;
  private currentUserId: string = ""; // 添加currentUserId属性
  private storeLocks: Map<string, Promise<void>> = new Map();


  private constructor() {}

  // 获取实例方法
  public static getInstance(): Service {
    if (!Service.instance) {
      Service.instance = new Service();
    }
    return Service.instance;
  }

  // 设置当前用户ID
  public setCurrentUserId(userId: string): void {
    this.currentUserId = userId;
  }

  // 获取当前用户ID
  public getCurrentUserId(): string {
    return this.currentUserId;
  }

  // 获取消息存储的key
  public getMessageStorageKey(message: ChatMessage): string {
    // 群聊消息
    if (message.sessionType === SessionType.ST_Group) {
      return `${message.receiverId}`;
    }
    // 私聊消息：根据当前用户是发送者还是接收者来决定key
    if (message.senderId.toString() === this.currentUserId) {
      return `${message.receiverId}`; // 存储对方ID的消息列表
    } else {
      return `${message.senderId}`; // 存储发送者ID的消息列表
    }
  }

  // 获取本地存储的 seq
  public async getSeq(userId: string): Promise<number> {
    const storedSeq = await AsyncStorage.getItem(`seq_${userId}`);
    if (storedSeq) {
      return parseInt(storedSeq, 10);
    } else {
      const newSeq = 0;
      await AsyncStorage.setItem(`seq_${userId}`, newSeq.toString());
      return newSeq;
    }
  }

  // 增加 seq
  public async incrementSeq(userId: string): Promise<number> {
    let seq = await this.getSeq(userId);
    seq += 1;
    await AsyncStorage.setItem(`seq_${userId}`, seq.toString());
    return seq;
  }

  // 更新seq的Value
  public async setSeq(userId: string, newSeq: number): Promise<number> {
    await AsyncStorage.setItem(`seq_${userId}`, newSeq.toString());
    return newSeq;
  }

  // 存储消息到本地
  public async storeMessage(message: ChatMessage): Promise<void> {
    if (!this.currentUserId) {
      throw new Error("Current user ID not set");
    }

    const storageKey = this.getMessageStorageKey(message);
    
    // 等待前一个操作完成
    const previousLock = this.storeLocks.get(storageKey) || Promise.resolve();
    
    // 创建新的锁
    const newLock = previousLock.then(async () => {
      try {
        const messages = await this.getMessages(storageKey);
        const messageExists = messages.some((msg) => msg.id === message.id);
        
        if (!messageExists) {
          console.log(
            "当前存储好友" + storageKey + "的消息，内容为" + message.content
          );
          messages.push(message);
          messages.sort((a, b) => a.timestamp - b.timestamp);
          await AsyncStorage.setItem(storageKey, JSON.stringify(messages));
        } else {
          console.log('消息已存在：', message.id);
        }
      } catch (error) {
        console.error('存储消息失败:', error);
        throw error;
      }
    });

    // 更新锁
    this.storeLocks.set(storageKey, newLock);

    // 等待当前操作完成
    await newLock;
  }

  // 获取本地存储的消息
  public async getMessages(storageKey: string): Promise<ChatMessage[]> {
    const storedMessages = await AsyncStorage.getItem(storageKey);
    return storedMessages ? JSON.parse(storedMessages) : [];
  }

  // 获取与特定用户或群组的聊天消息
  public async getChatMessages(
    targetId: string,
    isGroup: boolean = false
  ): Promise<ChatMessage[]> {
    if (!this.currentUserId) {
      throw new Error("Current user ID not set");
    }

    const storageKey = isGroup
      ? `messages_group_${targetId}`
      : `messages_${targetId}`;
    return await this.getMessages(storageKey);
  }
}

export default Service;
