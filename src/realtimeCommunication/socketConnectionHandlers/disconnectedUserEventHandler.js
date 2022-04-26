import store from "../../store/store";
import { setChatHistory } from "../../MessengerPage/messengerSlice";

const disconnectedUserEventHandler = (data) => {
  const { disconnectedUserSocketId } = data;
  const chatHistory = store.getState().messenger.chatHistory;

  const chatHistoryExistsForDisconnectedUser = chatHistory.find(
    (history) => history.socketId === disconnectedUserSocketId
  );

  if (chatHistoryExistsForDisconnectedUser) {
    store.dispatch(
      setChatHistory(
        chatHistory.filter(
          (history) => history.socketId !== disconnectedUserSocketId
        )
      )
    );
  }
};

export default disconnectedUserEventHandler;
