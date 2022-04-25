import * as onlineUsersController from "../onlineUsers/onlineUsersController";

const onlineUsersEventHandler = (onlineUsersData, socketId) => {
  onlineUsersController.setOnlineUsersExcludingMyself(
    onlineUsersData,
    socketId
  );
};

export default onlineUsersEventHandler;
