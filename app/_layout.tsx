import { Stack } from "expo-router";
import React from "react";
import Toast from "react-native-toast-message";
import { ClientIdProvider } from "./service/ClientIdContext";
import { ActionSheetProvider} from '@expo/react-native-action-sheet'

export default function RootLayout() {
  return (
    <ActionSheetProvider>
      <ClientIdProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="pages/login" />
          <Stack.Screen name="pages/register" />
          <Stack.Screen name="pages/(tabs)" />
          <Stack.Screen name="pages/chat" />
          <Stack.Screen name="pages/addPages" />
        </Stack>
        <Toast />
      </ClientIdProvider>
    </ActionSheetProvider>
  );
}