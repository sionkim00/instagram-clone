import { View, Text, ScrollView } from "react-native";
import React from "react";
import UserPictureAndFollows from "../components/UserPictureAndFollows";
import { useSelector } from "react-redux";
import UserInfo from "../components/UserInfo";
import ButtonComponent from "../components/ButtonComponent";
import StoryComponent from "../components/StoryComponent";
import UserPostProfile from "../components/UserPostProfile";

export default function ProfileScreen() {
  const user = useSelector((state) => state.user);
  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <UserPictureAndFollows user={user} />
      <UserInfo user={user} />
      <ButtonComponent buttonName="Edit Profile" />
      <StoryComponent />
      <UserPostProfile />
    </ScrollView>
  );
}
