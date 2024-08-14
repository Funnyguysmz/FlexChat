// pages/Login.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import ScreenLayout from "../../components/ScreenLayout";
import { theme } from "@/styles/theme";
import { useRouter } from "expo-router";

const local = true;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (local) {
      Alert.alert("登录成功");
      router.replace("/(tabs)/index");
    } else {
      try {
        const response = await fetch("my-url/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          Alert.alert("登录成功");
          router.replace("pages/impages/chatHome");
        } else {
          const errorData = await response.json();
          Alert.alert("登陆失败", errorData.message);
        }
      } catch (error) {
        Alert.alert("登陆失败", "发生未知错误");
      }
    }
  };

  return (
    <ScreenLayout title="登录">
      <View style={styles.inputContainer}>
        <Text style={styles.title}>登录</Text>
        <TextInput
          placeholder="用户名"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="密码"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>登录</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36,
    color: "rgba(0,0,0,0.7)",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    padding: 12,
    marginVertical: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
  },
  button: {
    backgroundColor: theme.primaryColor,
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
