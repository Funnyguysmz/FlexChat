import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import FriendItem from "../../components/frienditem";
import Ionicons from "@expo/vector-icons/Ionicons";
import TokenService from "@/app/service/TokenService";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";
import { useActionSheet } from "@expo/react-native-action-sheet";

interface Friend {
  id: string;
  avatar: string;
  nickname: string;
  phone_number: string;
  lastMessage: string;
}

export default function ChatsScreen() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [title, setTitle] = useState("Loading...");
  const [refreshing, setRefreshing] = useState(false); //刷新控件
  const router = useRouter(); //路由实例
  const [token, setToken] = useState<string | null>(null); // 保存 token
  const [showFloatingList, setShowFloatingList] = useState(false);
  const { showActionSheetWithOptions } = useActionSheet();

  // 右上角悬浮菜单
  const toggleFloatingList = () => {
    setShowFloatingList(!showFloatingList);
  };

  //长按菜单
  const handleLongPress = (item: { nickname: any; id: any }) => {
    const options = [
      `查看资料: ${item.nickname}`,
      `删除好友: ${item.nickname}`,
      "取消",
    ];

    const destructiveButtonIndex = 1; // 删除好友的按钮是具有破坏性的操作
    const cancelButtonIndex = 2; // 取消按钮

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // 查看资料
          console.log("查看资料", item.id);
          // 这里可以跳转到资料页面
        } else if (buttonIndex === 1) {
          // 删除好友
          console.log("删除好友", item.id);
          // 这里可以执行删除好友的逻辑
        }
      }
    );
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const tokenService = TokenService.getInstance();
      const token = await tokenService.getToken();
      setToken(token);
      const response = await fetch("http://47.113.118.26:9090/friend/list", {
        method: "GET",
        headers: {
          token: token,
        },
      });
      const data = await response.json();
      console.log(data.data.friends);
      if (response.ok && data.code === 200) {
        Toast.show({
          type: "success",
          text1: "加载成功",
          position: "bottom",
          bottomOffset: 100,
          visibilityTime: 1500,
        });
        setFriends(data.data.friends); //好友列表
      } else {
        Toast.show({
          type: "error",
          text1: "加载失败",
          text2: data.msg || "服务器返回错误",
          position: "bottom",
          bottomOffset: 100,
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "网络错误",
        text2: "请检查网络连接 🌐",
        position: "bottom",
        bottomOffset: 100,
      });
    } finally {
      setTitle("FlexChat");
      setRefreshing(false); // 结束刷新状态
    }
  };

  const onRefresh = () => {
    setTitle("Loading");
    setRefreshing(true); // 开始刷新
    fetchFriends();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity style={styles.addButton} onPress={toggleFloatingList}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={friends}
        renderItem={({ item }) => (
          <FriendItem
            id={item.id}
            avatar={item.avatar}
            name={item.nickname}
            lastMessage={item.lastMessage}
            onPress={() => {
              router.push({
                pathname: "pages/chat/chatScreen",
                params: { id: item.id, name: item.nickname, token: token }, // 传递token
              });
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      {showFloatingList && (
        <View style={styles.floatingList}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              router.push({ pathname: "pages/addPages/AddFriend" });
              toggleFloatingList();
            }}
          >
            <Text>添加好友</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              router.push({ pathname: "pages/createGroup" });
              toggleFloatingList();
            }}
          >
            <Text>创建群聊</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              router.push({ pathname: "pages/addPages/JoinGroup" });
              toggleFloatingList();
            }}
          >
            <Text>加入群聊</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    position: "relative",
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  addButton: {
    position: "absolute",
    right: 10,
  },
  list: {
    flex: 1,
  },
  floatingList: {
    position: "absolute",
    right: 10,
    top: 100,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  option: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
