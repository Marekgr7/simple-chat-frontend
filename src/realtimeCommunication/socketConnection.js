import io from "socket.io-client";
import store from "../store/store";
import { setOwnSocketId } from "./realtimeCommunicationSlice";

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io("http://localhost:3003");

  socket.once("connect", () => {
    store.dispatch(setOwnSocketId(socket.id));
  });
};
