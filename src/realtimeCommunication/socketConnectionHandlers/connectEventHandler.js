import store from "../../store/store";
import { setOwnSocketId } from "../realtimeCommunicationSlice";

const connectEventHandler = (socketId) => {
  store.dispatch(setOwnSocketId(socketId));
};

export default connectEventHandler;
