import { createSlice } from "@reduxjs/toolkit";
import messages from "./MessengerPage.messages";

// export const DUMMY_ONLINE_USERS = [
//   {
//     socketId: "123",
//     nick: "Canelo",
//   },
//   {
//     socketId: "345",
//     nick: "GGG",
//   },
//   {
//     socketId: "567",
//     nick: null,
//   },
// ];

// export const DUMMY_CHAT_HISTORY = [
//   {
//     socketId: "123",
//     messages: [
//       {
//         id: 1,
//         type: messagesTypes.CREATED,
//         content: "Hello world",
//       },
//       {
//         id: 2,
//         type: messagesTypes.RECEIVED,
//         content: "Hello",
//       },
//       {
//         id: 3,
//         type: messagesTypes.WARNING,
//         content: "Command invalid. Please enter valid command",
//       },
//       {
//         id: 4,
//         type: messagesTypes.CREATED,
//         content:
//           "Command invalid. Please enter valid command. Command invalid. Please enter valid command. Command invalid. Please enter valid command.",
//       },
//     ],
//   },
// ];

export const initialState = {
  onlineUsers: [],
  chatHistory: [],
  myNick: messages.defaultMyNick,
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
    setMyNick: (state, action) => {
      state.myNick = action.payload;
    },
  },
});

export const { setOnlineUsers, setChatHistory, setMyNick } =
  messengerSlice.actions;

export default messengerSlice.reducer;
