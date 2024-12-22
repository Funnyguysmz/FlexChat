import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Service from '../../service/NetService';
import TokenService from '@/app/service/TokenService';
import { useRouter } from "expo-router";

export default function AddFriendScreen() {
    const router = useRouter();

    const addFriend = async () => {
        try {
            const tokenService = TokenService.getInstance();
            const token = await tokenService.getToken();
            const response = await Service.addFriend('friendId',token); // 替换为实际的friendId
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.screenContainer}>
            <Text>创建群聊</Text>
            <Button title="添加好友" onPress={addFriend} />
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  