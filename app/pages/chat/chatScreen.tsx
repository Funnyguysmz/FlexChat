import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { protocol } from './message';
import Long from 'long';
import { Buffer } from 'buffer';
import { useClientId } from '../../service/ClientIdContext';
import TokenService from '../../service/TokenService';

// 从生成的 protocol 命名空间中获取所需类型
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
  sender: string;
  content: string;
  timestamp: number;
}

const longToNumber = (value: Long | number): number => {
  if (typeof value === 'number') {
    return value;
  }
  return value.toNumber();
};

const WEBSOCKET_URL = 'ws://47.113.118.26:9091/ws';
var CURRENT_USER_ID = 456; // 当前用户ID

export default function ChatScreen() {
  const router = useRouter();
  const { id, name, token } = useLocalSearchParams();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isConnecting, setIsConnecting] = useState(true);
  const [reconnectAttempt, setReconnectAttempt] = useState(0);
  const websocketRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>();

  var { clientId } = useClientId(); //获取sendmsg的id

  useEffect(() => {
    const loadUserId = async () => {
      const tokenService = TokenService.getInstance();
      const userId = await tokenService.getValue<number>('CURRENT_USER_ID');
      if (userId) {
        CURRENT_USER_ID = userId;
      }
    };

    loadUserId();
  },[]);

  const connectWebSocket = useCallback(() => {

    if (websocketRef.current?.readyState === WebSocket.OPEN) return;
    
    setIsConnecting(true);
    const ws = new WebSocket(WEBSOCKET_URL);
    websocketRef.current = ws;

    ws.onopen = () => {
      console.log('WebSocket connected');
      setIsConnecting(false);
      
      try {
        const normalizedToken = Array.isArray(token) ? token[0] : token || '';
        const loginMsg = LoginMsg.create({
          token: new TextEncoder().encode(normalizedToken),
        });

        const loginInput = Input.create({
          type: CmdType.CT_Login,
          data: LoginMsg.encode(loginMsg).finish(),
        });

        ws.send(Input.encode(loginInput).finish());
        
        const syncMsg = SyncInputMsg.create({
          seq: Long.fromNumber(0),
        });

        const syncInput = Input.create({
          type: CmdType.CT_Sync,
          data: SyncInputMsg.encode(syncMsg).finish(),
        });

        ws.send(Input.encode(syncInput).finish());
      } catch (error) {
        console.error('Login failed:', error);
        Alert.alert('连接错误', '登录消息发送失败');
      }
    };

    ws.onmessage = async (event) => {
      console.log("msg come !");
      try {
        // event.data 是 string 类型或 base64 编码的数据
        const buffer = new Uint8Array(Buffer.from(event.data, 'base64'));
    
        // 解码 Output
        const output = Output.decode(buffer);

        console.log('output = ',output);
    
        if (output.code !== 200) {
          console.error('Server error:', output.codeMsg);
          return;
        }
    
        switch (output.type) {
          case CmdType.CT_Message: {
            const pushMsg = Message.decode(output.data);
            setMessages((prev) => [{
              id: String(pushMsg.seq),
              sender: String(pushMsg.senderId),
              content: new TextDecoder().decode(pushMsg.content),
              timestamp: longToNumber(pushMsg.sendTime),
            }, ...prev]);
    
            const ackMsg = ACKMsg.create({
              type: ACKType.AT_Push,
              seq: pushMsg.seq,
            });
    
            const ackInput = Input.create({
              type: CmdType.CT_ACK,
              data: ACKMsg.encode(ackMsg).finish(),
            });
    
            ws.send(Input.encode(ackInput).finish());
            break;
          }
          case CmdType.CT_Sync: {
            const syncOutput = SyncOutputMsg.decode(output.data);
            const newMessages = syncOutput.messages.map(msg => ({
              id: String(msg.seq),
              sender: String(msg.senderId),
              content: msg.content ? new TextDecoder().decode(msg.content) : '',
              timestamp: longToNumber(msg.sendTime ?? 0),
            }));
            setMessages((prev) => [...newMessages, ...prev]);
            break;
          }
        }
      } catch (error) {
        console.error('Message processing error:', error);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      setIsConnecting(false);
    };

    ws.onclose = (event) => {
      console.log('WebSocket closed:', event.code, event.reason);
      setIsConnecting(false);

      if (event.code !== 1000) {
        const timeout = Math.min(1000 * Math.pow(2, reconnectAttempt), 30000);
        reconnectTimeoutRef.current = setTimeout(() => {
          setReconnectAttempt((prev) => prev + 1);
          connectWebSocket();
        }, timeout);
      }
    };
  }, [token, reconnectAttempt]);

  useEffect(() => {
    connectWebSocket();
    
    // 设置心跳检测
    const heartbeatInterval = setInterval(() => {
      if (websocketRef.current?.readyState === WebSocket.OPEN) {
        const heartbeatInput = Input.create({
          type: CmdType.CT_Heartbeat,
          data: new Uint8Array(),
        });
        websocketRef.current.send(Input.encode(heartbeatInput).finish());
      }
    }, 30000);

    return () => {
      clearInterval(heartbeatInterval);
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (websocketRef.current) {
        websocketRef.current.close(1000, 'Component unmounting');
      }
    };
  }, [connectWebSocket]);

  const sendMessage = useCallback(() => {
    if (!websocketRef.current || !input.trim()) return;
    console.log('msg send !'+CURRENT_USER_ID);

    //自增cid
    clientId++;

    const message = Message.create({
      sessionType: SessionType.ST_Single,
      receiverId: Long.fromNumber(Number(Array.isArray(id) ? id[0] : id)),
      senderId: Long.fromNumber(CURRENT_USER_ID),
      messageType: MessageType.MT_Text,
      content: new TextEncoder().encode(input.trim()),
      seq: Long.fromNumber(Date.now()),
      sendTime: Long.fromNumber(Date.now()),
    });

    const upMsg = {
      clientId, // 添加 clientId
      msg: message,
    };

    const encodedMessage = UpMsg.encode(upMsg).finish();

    const messageInput = Input.create({
      type: CmdType.CT_Message,
      data: encodedMessage,
    });

    try {
      // websocketRef.current.send(UpMsg.encode(upMsg).finish());
      // 编码并查看发送的消息
    const encodedMessage = Input.encode(messageInput).finish();
    console.log('Encoded message in base64:', Buffer.from(encodedMessage).toString('base64'));

    // 发送消息
    websocketRef.current.send(encodedMessage);

      setMessages((prev) => [{
        id: String(message.seq),
        sender: String(message.senderId),
        content: input.trim(),
        timestamp: longToNumber(message.sendTime),
      }, ...prev]);
      setInput('');
    } catch (error) {
      console.error('Failed to send message:', error);
      Alert.alert('发送失败', '消息发送失败，请重试');
    }
  }, [id, input]);


  // 组件的其余部分（渲染逻辑和样式）保持不变...
  const renderMessage = ({ item }: { item: ChatMessage }) => (
    <View
      style={[
        styles.message,
        item.sender === String(CURRENT_USER_ID) ? styles.myMessage : styles.otherMessage,
      ]}
    >
      <Text style={styles.sender}>
        {item.sender === String(CURRENT_USER_ID) ? '我' : item.sender}
      </Text>
      <Text style={styles.messageContent}>{item.content}</Text>
      <Text style={styles.timestamp}>
        {new Date(item.timestamp).toLocaleTimeString()}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {Array.isArray(name) ? name[0] : name || '聊天'}
        </Text>
        <Button title="返回" onPress={() => router.back()} />
      </View>

      {isConnecting ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color="#0000ff" />
          <Text style={styles.loadingText}>正在连接...</Text>
        </View>
      ) : (
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          style={styles.messageList}
          inverted
          contentContainerStyle={styles.messageListContent}
        />
      )}

      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="输入消息..."
          style={styles.input}
          multiline
          maxLength={1000}
          onSubmitEditing={sendMessage}
        />
        <Button
          title="发送"
          onPress={sendMessage}
          disabled={!input.trim() || isConnecting}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
  },
  messageList: {
    flex: 1,
  },
  messageListContent: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  message: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
    maxWidth: '75%',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    borderBottomRightRadius: 5,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 5,
  },
  sender: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  messageContent: {
    fontSize: 16,
    lineHeight: 20,
  },
  timestamp: {
    fontSize: 10,
    color: '#999',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    maxHeight: 100,
    backgroundColor: '#fff',
  },
});