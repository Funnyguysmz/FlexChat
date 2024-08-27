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

interface Friend {
  id: string;
  avatar: string;
  username: string;
  email: string;
  lastMessage: string;
}

export default function ChatsScreen() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [title, setTitle] = useState("Loading...");

  useEffect(() => {
    // 预留方法来获取好友列表
    const fetchFriends = async () => {
      const tokenService = TokenService.getInstance();
      const token = await tokenService.getToken();
      const response = await fetch(
        "http://47.113.118.26:8080/get/friend/list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: token,
          }),
        }
      );
      const data = await response.json();
      if (response.ok && data.code === 200) {
      } else {
      }
      setTitle("FlexChat");
    };

    fetchFriends();
  }, []);

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
            avatar={item.avatar}
            name={item.username}
            lastMessage={item.lastMessage}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
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
