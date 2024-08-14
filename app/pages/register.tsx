// pages/Register.tsx
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

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setcheckPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (local) {
      Alert.alert("注册成功");
      router.replace("pages/login");
    } else {
      try {
        const response = await fetch("my-url/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // username: username,
            // password: password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          Alert.alert("注册成功");
          router.replace("pages/login");
        } else {
          const errorData = await response.json();
          Alert.alert("注册失败", errorData.message);
        }
      } catch (error) {
        Alert.alert("注册失败", "发生未知错误");
      }
    }
  };

  return (
    <ScreenLayout title="注册">
      <View style={styles.inputContainer}>
        <Text style={styles.title}>注册</Text>
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
        <TextInput
          placeholder="确认密码"
          secureTextEntry
          style={styles.input}
          value={checkpassword}
          onChangeText={setcheckPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>注册</Text>
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
    marginVertical: 8,
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
