import io from "socket.io-client";
import store from "../store/store";

import { setOwnSocketId } from "./realtimeCommunicationSlice";
import * as onlineUsersController from "./onlineUsers/onlineUsersController";

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
};
