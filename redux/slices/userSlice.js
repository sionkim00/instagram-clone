import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  profilePicture: "",
  followers: 100,
  following: 200,
  posts: 340,
  about:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, delectus eius velit officiis vitae necessitatibus accusamus. Voluptatibus quas earum illum.",
  followedBy: ["andrewJoe", "mcLovin", "tonyStark"],
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        username: action.payload.username,
        profilePicture: action.payload.profilePicture,
        followers: state.followers,
        post: state.posts,
        following: state.following,
        about: state.about,
        followedBy: state.followedBy,
      };
    },
    logout: (state, action) => {
      return {
        ...state,
        username: "",
        profilePicture: "",
        followers: 0,
        post: 0,
        following: 0,
        about: "",
        followedBy: [],
      };
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
