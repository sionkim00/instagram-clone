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

export default function UserPostProfile(props) {
  const Story = ({ image, name }) => {
    return (
      <TouchableOpacity>
        <View>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={FakePicturesData}
        renderItem={({ item }) => <Story image={item.url} name={item.name} />}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
  },
  text: {
    textAlign: "center",
  },
});
