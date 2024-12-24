import { Stack } from "expo-router";
import React, { useEffect } from "react";
import Toast from "react-native-toast-message";
import { ClientProvider } from "./service/ClientIdContext";
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import TokenService from "./service/TokenService";
import WebSocketService from "./pages/chat/WebSocketService";

export default function RootLayout() {
  useEffect(() => {
    // 检查用户是否已登录并建立WebSocket连接
    const checkAuthAndConnect = async () => {
      const tokenService = TokenService.getInstance();
      const token = await tokenService.getToken();
      
      if (token) {
        // 如果有token，建立WebSocket连接
        WebSocketService.getInstance().connect(token);
      } else {
        console.log('No token');
      }
    };

    checkAuthAndConnect();

    // 清理函数
    return () => {
      WebSocketService.getInstance().disconnect();
    };
  }, []);

  return (
    <ActionSheetProvider>
      <ClientProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="pages/login" />
          <Stack.Screen name="pages/register" />
          <Stack.Screen name="pages/(tabs)" />
          <Stack.Screen name="pages/chat" />
          <Stack.Screen name="pages/addPages" />
        </Stack>
        <Toast />
      </ClientProvider>
    </ActionSheetProvider>
  );
}