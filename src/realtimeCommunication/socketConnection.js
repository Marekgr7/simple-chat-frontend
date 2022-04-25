import io from "socket.io-client";

import chatMessageEventHandler from "./socketConnectionHandlers/chatMessageEventHandler";
import chatMessageUndoEventHandler from "./socketConnectionHandlers/chatMessageUndoEventHandler";
import connectEventHandler from "./socketConnectionHandlers/connectEventHandler";
import countdownEventHandler from "./socketConnectionHandlers/countdownEventHandler";
import onlineUsersEventHandler from "./socketConnectionHandlers/onlineUsersEventHandler";

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io("http://localhost:3003");

  socket.on("connect", () => connectEventHandler(socket.id));

  socket.on("online-users", (data) => onlineUsersEventHandler(data, socket.id));

  socket.on("chat-message", chatMessageEventHandler);

  socket.on("chat-message-undo", chatMessageUndoEventHandler);

  socket.on("countdown", countdownEventHandler);
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

export const sendCountdownDetails = (data) => {
  socket.emit("countdown", data);
};
