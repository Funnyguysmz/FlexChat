import React, { ReactNode } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { theme } from "../styles/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

//登录注册复用组件

type ScreenLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function ScreenLayout({ title, children }: ScreenLayoutProps) {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/Launch_2.jpeg")}
      style={styles.backgroundImage}
      imageStyle={{ opacity: 0.5 }}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          {/* <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View> */}
          <View style={styles.innerContent}>{children}</View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  titleContainer: {
    marginBottom: 20,
    padding: 3,
    borderWidth: 2,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0)",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  backButton: {
    paddingRight: 16,
  },
  backText: {
    color: theme.primaryColor,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36,
    color: "rgba(0,0,0,0.7)",
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  innerContent: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 2,
  },
});
