import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Service from "../../service/NetService";
import TokenService from "@/app/service/TokenService";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AddFriendScreen() {
  const router = useRouter();
  const [friendId, setFriendId] = useState(""); // 用于保存输入的好友ID

  const addFriend = async () => {
    try {
      const tokenService = TokenService.getInstance();
      const token = await tokenService.getToken();
      const response = await Service.addFriend(friendId, token); // 替换为实际的friendId
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>添加好友</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="输入好友 ID"
          value={friendId}
          onChangeText={setFriendId}
          keyboardType="numeric" // 好友 ID 可能是数字
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={addFriend}>
        <Text style={styles.addButtonText}>确认添加</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  backButton: {
    position: "absolute",
    left: 10,
    zIndex: 1,
  },
  inputContainer: {
    margin: 20,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
  },
  addButton: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
