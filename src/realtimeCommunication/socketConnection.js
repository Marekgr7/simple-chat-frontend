import io from "socket.io-client";
import store from "../store/store";

import { setOwnSocketId } from "./realtimeCommunicationSlice";
import * as onlineUsersController from "./onlineUsers/onlineUsersController";
import * as chatController from "./chat/chatController";

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io("http://localhost:3003");

  socket.on("connect", connectEventHandler);

  socket.on("online-users", onlineUsersEventHandler);

  socket.on("chat-message", chatMessageEventHandler);

  socket.on("chat-message-undo", chatMessageUndoEventHandler);
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

const connectEventHandler = () => {
  store.dispatch(setOwnSocketId(socket.id));
};

const onlineUsersEventHandler = (onlineUsersData) => {
  onlineUsersController.setOnlineUsersExcludingMyself(
    onlineUsersData,
    socket.id
  );
};

const chatMessageEventHandler = (chatMessageData) => {
  chatController.addMessageToStore({
    chatHistorySocketId: chatMessageData.senderSocketId,
    messageType: chatController.messagesTypes.RECEIVED,
    newMessage: chatMessageData.message,
  });
};

const chatMessageUndoEventHandler = (chatMessageUndoData) => {
  chatController.removeSpecificMessageFromLocalStore({
    chatHistorySocketId: chatMessageUndoData.senderSocketId,
    messageId: chatMessageUndoData.messageId,
  });
};
