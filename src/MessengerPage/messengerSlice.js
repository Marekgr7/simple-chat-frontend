import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  onlineUsers: [],
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
