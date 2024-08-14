import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ChatsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Contacts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
