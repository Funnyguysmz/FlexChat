import { Stack } from "expo-router";

export default function AddPagesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddFriend" />
      <Stack.Screen name="CreateGroup" />
      <Stack.Screen name="JoinGroup" />
    </Stack>
  );
}
