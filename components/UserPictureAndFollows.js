import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function UserPictureAndFollows({ user }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.userPicture}
          source={{ uri: user.profilePicture }}
        />
      </TouchableOpacity>
      <View style={styles.followsContainer}>
        <Text style={styles.textBold}>{user.post}</Text>
        <Text>Post</Text>
      </View>
      <View style={styles.followsContainer}>
        <Text style={styles.textBold}>{user.followers}</Text>
        <Text>Followers</Text>
      </View>
      <View style={styles.followsContainer}>
        <Text style={styles.textBold}>{user.following}</Text>
        <Text>Following</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  userPicture: {
    width: 77,
    height: 77,
    borderRadius: 100,
    marginRight: 10,
  },
  followsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  textBold: {
    fontWeight: "bold",
  },
});
