import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ButtonComponent({ buttonName }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{buttonName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "grey",
    height: 30,
    borderRadius: 5,
    marginHorizontal: 15,
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
