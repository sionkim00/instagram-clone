import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function UserInfo({ user }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>{user.username}</Text>
      <Text style={{}}>{user.about}</Text>
      <Text style={{ paddingTop: 5, marginBottom: 10 }}>
        Followed by <Text style={styles.textBold}> {user.followedBy[0]} </Text>
        and
        <Text style={styles.textBold}> {user.followedBy[1]} </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    paddingHorizontal: 15,
  },
  textBold: {
    fontWeight: "bold",
    paddingVertical: 5,
  },
});
