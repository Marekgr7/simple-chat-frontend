import store from "../../store/store";
import { setOnlineUsers } from "../../MessengerPage/messengerSlice";

export const setOnlineUsersExcludingMyself = (
  onlineUsers = [],
  ownSocketId
) => {
  store.dispatch(
    setOnlineUsers(onlineUsers.filter((u) => u.socketId !== ownSocketId))
  );
};
