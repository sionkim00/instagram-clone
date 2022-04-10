import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { FakePostData } from "../FakePostData";
import { Feather, AntDesign, Fontisto } from "@expo/vector-icons";

export default function PostListHome(props) {
  const Post = ({ image, username, likes, title }) => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 30, height: 30, borderRadius: 20 }}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
              {username}
            </Text>
          </View>
          <Feather name="more-horizontal" size={24} color="black" />
        </View>

        <View>
          <Image source={{ uri: image }} style={styles.image} />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              name="hearto"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <Feather
              name="message-circle"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <Feather
              name="send"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </View>
          <View>
            <Fontisto
              name="favorite"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
          </View>
        </View>

        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
          {likes} Likes
        </Text>
        <Text style={{ marginLeft: 10, marginBottom: 15 }}>{title}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={FakePostData}
        renderItem={({ item }) => (
          <Post
            image={item.image}
            title={item.title}
            likes={item.likes}
            username={item.user.username}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH,
    height: 400,
    resizeMode: "cover",
  },
  text: {
    textAlign: "center",
  },
});
