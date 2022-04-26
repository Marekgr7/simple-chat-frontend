import store from "../../../store/store";
import * as socketConnection from "../../socketConnection";
import { removeSpecificMessage } from "../../../MessengerPage/messengerSlice";

const removeLastMessageOfSpecificType = ({ chatHistorySocketId, type }) => {
  const specificChatHistory = store
    .getState()
    .messenger.chatHistory.find(
      (history) => history.socketId === chatHistorySocketId
    );

  if (specificChatHistory) {
    const reversedMessages = [...specificChatHistory.messages].reverse();

    const lastMessageOfSpecificType = reversedMessages.find(
      (m) => m.type === type
    );

    store.dispatch(
      removeSpecificMessage({
        messageId: lastMessageOfSpecificType.id,
        chatHistorySocketId: chatHistorySocketId,
      })
    );

    socketConnection.sendUndoMessage({
      messageId: lastMessageOfSpecificType.id,
      receiverSocketId: chatHistorySocketId,
    });
  }
};

export default removeLastMessageOfSpecificType;
