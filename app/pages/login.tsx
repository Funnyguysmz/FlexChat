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
import TokenService from "../service/TokenService";
import { useClientId } from "../service/ClientIdContext";
const local = false;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setClientId } = useClientId();

  const handleLogin = async () => {
    if (local) {   //本地测试路由
      Alert.alert("登录成功");
      router.replace("pages/(tabs)");
    } else {    //在线测试路由
      console.log("online test!");
      try {
        const formData = new FormData();
        formData.append("phone_number", username); // 添加手机号
        formData.append("password", password); // 添加密码
        const response = await fetch("http://47.113.118.26:9090/login", {
          method: "POST",
          body: formData
        });
        const data = await response.json();

        console.log(data);

        if (response.ok && data.code === 200) {
          const tokenService = TokenService.getInstance();
          await tokenService.setToken(data.data.token);
          await tokenService.setValue('CURRENT_USER_ID',data.data.user_id);
          Alert.alert("登录成功");

          setClientId(0);
          
          router.replace("pages/(tabs)");
        } else {
          Alert.alert("登陆失败", data.msg);
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
          placeholder="用户名/手机号"
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
