import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/app/Colors";
import IconComponent from "../../icon_component";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "chatbubbles-sharp" : "chatbubbles-outline"}
              size={24}
              color={focused ? Colors.appleBlue : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "people-sharp" : "people-outline"}
              size={24}
              color={focused ? Colors.appleBlue : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused ? "navigate-circle-sharp" : "navigate-circle-outline"
              }
              size={24}
              color={focused ? Colors.appleBlue : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: "Me",
          tabBarIcon: ({ focused }) => (
            <IconComponent
              name={focused ? "me-filled" : "me-outlined"}
              size={24}
              color={focused ? Colors.appleBlue : "black"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
