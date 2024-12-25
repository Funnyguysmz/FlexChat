import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import StorageService from "@/app/service/TokenService";

export default function Me() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [username, setUsername] = useState("Your Name");

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const fid =
        await StorageService.getInstance().getValue("CURRENT_USER_ID");
      if (isMounted) {
        setUsername(String(fid));
      }
    };

    fetchData();

    return () => {
      isMounted = false; // 清理逻辑
    };
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.avatarContainer}>
          <Image
            source={
              avatar
                ? { uri: avatar }
                : require("@/assets/images/nowholder.jpeg")
            }
            style={styles.avatar}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.username}>{"Fid:" + username}</Text>
      <Button title="Change Avatar" onPress={pickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    borderRadius: 100,
    overflow: "hidden",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
