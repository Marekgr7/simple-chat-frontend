import io from "socket.io-client";
import store from "../store/store";

import { setOwnSocketId } from "./realtimeCommunicationSlice";
import * as onlineUsersController from "./onlineUsers/onlineUsersController";
import * as chatController from "./chat/chatController";

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io("http://localhost:3003");

  socket.on("connect", () => {
    store.dispatch(setOwnSocketId(socket.id));
  });

  socket.on("online-users", (onlineUsersData) => {
    onlineUsersController.setOnlineUsersExcludingMyself(
      onlineUsersData,
      socket.id
    );
  });

  socket.on("chat-message", (chatMessageData) => {
    chatController.addMessageToStore({
      chatHistorySocketId: chatMessageData.senderSocketId,
      messageType: chatController.messagesTypes.RECEIVED,
      newMessage: chatMessageData.message,
    });
  });

  socket.on("chat-message-undo", (data) => {
    chatController.removeSpecificMessageFromLocalStore({
      chatHistorySocketId: data.senderSocketId,
      messageId: data.messageId,
    });
  });
};

export const sendNewChatMessage = (data) => {
  socket.emit("chat-message", data);
};

export const sendNickChange = (data) => {
  socket.emit("nick-change", data);
};

export const sendUndoMessage = (data) => {
  socket.emit("chat-message-undo", data);
};
