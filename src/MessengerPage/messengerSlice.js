import { createSlice } from "@reduxjs/toolkit";

export const DUMMY_ONLINE_USERS = [
  {
    socketId: "123",
    nick: "Canelo",
  },
  {
    socketId: "345",
    nick: "GGG",
  },
];

export const initialState = {
  onlineUsers: DUMMY_ONLINE_USERS,
  chatHistory: [],
  nickname: null,
};

export const messengerSlice = createSlice({
  name: "messenger",
  initialState,
  reducers: {
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    setChatHistory: (state, action) => {
      state.chatHistory = action.payload;
    },
  },
});

export const { setOnlineUsers, setChatHistory } = messengerSlice;

export default messengerSlice.reducer;
