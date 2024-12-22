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

export default function JoinGroupScreen() {
  const router = useRouter();
  const [groupId, setGroupId] = useState("");

  const joinGroup = async () => {
    try {
      const tokenService = TokenService.getInstance();
      const token = await tokenService.getToken();
      const response = await Service.joinGroup(groupId, token);
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
        <Text style={styles.headerTitle}>加入群聊</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="输入群聊 ID"
          value={groupId}
          onChangeText={setGroupId}
          keyboardType="numeric" // 群聊 ID
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={joinGroup}>
        <Text style={styles.addButtonText}>确认加入</Text>
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
