import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function HeaderHome() {
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="logo-instagram" size={24} color="black" />
        <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 20 }}>
          Instagram
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="add-box" size={24} color="black" />
        <Ionicons
          name="heart"
          size={24}
          color="black"
          style={{ marginLeft: 12 }}
        />
        <FontAwesome5
          name="facebook-messenger"
          size={24}
          color="black"
          style={{ marginLeft: 12 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
