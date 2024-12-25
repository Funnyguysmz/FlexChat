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

const local = false;

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (local) {
      Alert.alert("注册成功");
      router.replace("pages/login");
    } else {
      // console.log("online test!");
      const formData = new FormData();
        formData.append("phone_number", email);
        formData.append("password", password);
        formData.append("nickname", username);
      try {
        const response = await fetch(
          "http://47.113.118.26:9090/register",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();

        console.log(data);

        if (response.ok && data.code === 200) {
          Alert.alert("注册成功");
          router.replace("pages/login");
        } else {
          Alert.alert("注册失败", data.msg);
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
          placeholder="手机号/用户名"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        {/* <View style={styles.codeContainer}>
          <TextInput
            placeholder="验证码"
            style={styles.inputCode}
            value={code}
            onChangeText={setCode}
          />
          <TouchableOpacity onPress={() => {}} style={styles.sendButton}>
            <Text style={styles.buttonText}>发送</Text>
          </TouchableOpacity>
        </View> */}
        <TextInput
          placeholder="昵称"
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
  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputCode: {
    flex: 2, // 占据2/3的宽度
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
  sendButton: {
    flex: 1, // 占据1/3的宽度
    backgroundColor: theme.primaryColor,
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    marginLeft: 10,
  },
});
