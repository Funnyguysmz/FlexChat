import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

// 定义FriendItem组件的Props类型
type FriendItemProps = {
  avatar: string; // 头像的URL
  name: string; // 好友名字
  lastMessage: string; // 最新消息
  id: string,
  onPress: () => void;  //点击事件
};

const FriendItem: React.FC<FriendItemProps> = ({
  avatar,
  name,
  lastMessage,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.container}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.lastMessage}>{lastMessage}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  lastMessage: {
    color: "#666",
    marginTop: 5,
  },
});

export default FriendItem;
