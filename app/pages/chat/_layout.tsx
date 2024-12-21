import { Stack } from "expo-router";

export default function ChatLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // 是否显示顶部导航栏
      }}
    />
  );
}