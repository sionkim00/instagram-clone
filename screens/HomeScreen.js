import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import StoryComponent from "../components/StoryComponent";
import PostListHome from "../components/PostListHome";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = await axios.get("https://randomuser.me/api/");
    const newUser = {
      username: user.data.results[0].login.username,
      profilePicture: user.data.results[0].picture.large,
    };
    console.log(newUser);
    dispatch(setUser(newUser));
  };
  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <StoryComponent />
      <PostListHome />
    </ScrollView>
  );
}
