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
  const [refreshing, setRefreshing] = useState(false);  //刷新控件
  const router = useRouter();  //路由实例
  const [token, setToken] = useState<string | null>(null); // 保存 token

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const tokenService = TokenService.getInstance();
      const token = await tokenService.getToken();
      setToken(token);
      const response = await fetch(
        "http://47.113.118.26:9090/friend/list",
        {
          method: "GET",
          headers: {
            token:token,
          },
        }
      );
      const data = await response.json();
      console.log(data.data.friends);
      if (response.ok && data.code === 200) {
        Toast.show({
          type: "success",
          text1: "加载成功",
          position:"bottom",
          bottomOffset: 100,
          visibilityTime: 1500,
        });
        setFriends(data.data.friends);  //好友列表
      } else {
        Toast.show({
          type: "error",
          text1: "加载失败",
          text2: data.msg || "服务器返回错误",
          position:"bottom",
          bottomOffset: 100,
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "网络错误",
        text2: "请检查网络连接 🌐",
        position:"bottom",
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
        <TouchableOpacity style={styles.addButton} onPress={() => {}}>
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
                params: {id: item.id, name: item.nickname, token: token},  //传递token todo
              });
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
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
});
