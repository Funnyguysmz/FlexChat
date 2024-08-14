import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="pages/login" />
      <Stack.Screen name="pages/register" />
      <Stack.Screen name="pages/(tabs)" />
    </Stack>
  );
}
