import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { FakePicturesData } from "../FakePicturesData";

export default function StoryComponent(props) {
  const Story = ({ image, name }) => {
    return (
      <TouchableOpacity
        style={{ width: 60, height: 76, marginLeft: 15, marginVertical: 15 }}
      >
        <View>
          <View
            style={{
              width: 60,
              height: 60,
              borderWidth: 1,
              borderColor: "#eee",
              borderRadius: 30,
            }}
          />
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={FakePicturesData}
        renderItem={({ item }) => <Story image={item.url} name={item.name} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 52,
    height: 52,
    borderRadius: 26,
    position: "absolute",
    top: 4,
    left: 4,
  },
  text: {
    textAlign: "center",
  },
});
