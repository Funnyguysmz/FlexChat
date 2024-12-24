import React, { useEffect, useState, useCallback, useRef } from "react";
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
  TouchableOpacity,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useClientContext } from "../../service/ClientIdContext";
import TokenService from "../../service/TokenService";
import Service from "@/app/service/NetService";
import Toast from "react-native-toast-message";
import WebSocketService from "./WebSocketService";
import StorageService from "@/app/service/StorageService";

interface ChatMessage {
  id: any; // 消息的唯一标识
  senderId: any; // 发送者 ID
  receiverId: any; // 接收者 ID
  content: any; // 消息内容
  sessionType: any; // 会话类型 (1 单聊, 2 群聊)
  messageType: any; // 消息类型 (1 文本, 2 图片, 3 语音)
  timestamp: any; // 发送时间戳
}

export default function ChatScreen() {
  const router = useRouter();
  const { id, name, token } = useLocalSearchParams();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isConnecting, setIsConnecting] = useState(true);
  const wsService = useRef(WebSocketService.getInstance());
  const { clientId, setClientId } = useClientContext();
  const { showActionSheetWithOptions } = useActionSheet();
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  useEffect(() => {
    const initializeChat = async () => {
      const tokenService = TokenService.getInstance();
      const userId = await tokenService.getValue<number>("CURRENT_USER_ID");

      if (userId) {
        setCurrentUserId(userId);

        if (id !== undefined) {
          const normalizedId = Array.isArray(id) ? id[0] : id;
          // console.log('对方id = '+normalizedId);
          // 加载本地存储的消息
          const localMessages =
            await StorageService.getInstance().getMessages(normalizedId);
          // console.log(localMessages);
          setMessages(localMessages.reverse()); // 将本地消息逆序（FlatList 使用 inverted）
        } else {
          console.error("id is undefined");
        }
      }
    };

    const handleMessage = async (message: ChatMessage) => {
      setMessages((prev) => [message, ...prev]);

      await StorageService.getInstance().storeMessage(message);
    };

    const handleConnection = (status: boolean) => {
      console.log("set status!" + status);
      setIsConnecting(!status);
    };

    initializeChat();

    const loadUserId = async () => {
      const tokenService = TokenService.getInstance();
      const userId = await tokenService.getValue<number>("CURRENT_USER_ID");
      if (userId) {
        setCurrentUserId(userId);
      }
    };

    loadUserId();

    // 添加消息和连接状态处理器
    wsService.current.addMessageHandler(handleMessage);
    wsService.current.addConnectionHandler(handleConnection);

    // 如果 WebSocket 已经连接，手动触发连接状态更新
    if (wsService.current.isConnected()) {
      setIsConnecting(false); // WebSocket 已连接，更新状态
    } else {
      setIsConnecting(true); // WebSocket 连接中，保持加载状态
    }

    // 清理函数
    return () => {
      wsService.current.removeMessageHandler(handleMessage);
      wsService.current.removeConnectionHandler(handleConnection);
    };
  }, [id]);

  // 菜单处理
  const handleLongPress = (nickname: any, userId: any) => {
    const normalizedNickname = Array.isArray(nickname) ? nickname[0] : nickname;
    const normalizedUserId = Array.isArray(userId) ? userId[0] : userId;

    const options = [`删除好友: ${normalizedNickname}`, "取消"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      async (buttonIndex) => {
        if (buttonIndex === 0) {
          try {
            const tokenService = TokenService.getInstance();
            const token = await tokenService.getToken();
            const response = await Service.deleteFriend(
              normalizedUserId,
              token
            );

            if (response.code === 200) {
              Toast.show({
                type: "success",
                text1: "删除成功",
                position: "bottom",
                bottomOffset: 100,
                visibilityTime: 1500,
              });
              router.back();
            }
          } catch (error) {
            console.error("Delete friend error:", error);
            Toast.show({
              type: "error",
              text1: "删除失败",
              position: "bottom",
              bottomOffset: 100,
              visibilityTime: 1500,
            });
          }
        }
      }
    );
  };

  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;
    const nowSeq = await StorageService.getInstance().incrementSeq(
      currentUserId ? currentUserId.toString() : ""
    );

    try {
      const normalizedId = Number(Array.isArray(id) ? id[0] : id);
      const nextClientId = clientId + 1;
      setClientId(nextClientId);

      const message = await wsService.current.sendMessage(
        normalizedId,
        input.trim(),
        nextClientId,
        nowSeq
      );

      setMessages((prev) => [message, ...prev]);
      setInput("");
    } catch (error) {
      console.error("Failed to send message:", error);
      Alert.alert("发送失败", "消息发送失败，请重试");
    }
  }, [id, input, clientId, setClientId]);

  const renderMessage = ({ item }: { item: ChatMessage }) => (
    <View
      style={[
        styles.message,
        String(item.senderId) === currentUserId?.toString()
          ? styles.myMessage
          : styles.otherMessage,
      ]}
    >
      <Text style={styles.sender}>
        {item.senderId == String(currentUserId) ? "我" : name}
      </Text>
      <Text style={styles.messageContent}>{item.content}</Text>
      <Text style={styles.timestamp}>
        {new Date(item.timestamp * 1000).toLocaleTimeString()}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back-outline" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>
          {Array.isArray(name) ? name[0] : name || "聊天"}
        </Text>
        <TouchableOpacity
          onPress={() =>
            handleLongPress(
              Array.isArray(name) ? name[0] : name,
              Array.isArray(id) ? id[0] : id
            )
          }
        >
          <Ionicons name="ellipsis-horizontal" size={24} />
        </TouchableOpacity>
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
  backButton: {
    left: 0,
    zIndex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    height: 50,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: "#666",
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
    maxWidth: "75%",
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
    borderBottomRightRadius: 5,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 5,
  },
  sender: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  messageContent: {
    fontSize: 16,
    lineHeight: 20,
  },
  timestamp: {
    fontSize: 10,
    color: "#999",
    alignSelf: "flex-end",
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    maxHeight: 100,
    backgroundColor: "#fff",
  },
});
