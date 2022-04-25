import { v4 as uuidv4 } from "uuid";

import { addMessageToStore, messagesTypes } from "../chatController";
import messengerMessages from "../../../MessengerPage/MessengerPage.messages";
import store from "../../../store/store";

const findIfAnyMessageWasSentByMeToSpecificUser = (receiverSocketId) => {
  const chatHistory = store.getState().messenger.chatHistory;

  const specificChatHistory = chatHistory.find(
    (history) => history.socketId === receiverSocketId
  );

  if (!specificChatHistory) {
    return false;
  }

  return specificChatHistory.messages.find(
    (m) => m.type === messagesTypes.CREATED
  );
};

const undoLastMessage = ({ command, receiverSocketId }) => {
  const isCommandValid = command === "/oops";

  if (isCommandValid) {
    const hasAnyMessageBeenSentByMe =
      findIfAnyMessageWasSentByMeToSpecificUser(receiverSocketId);
  } else {
    addMessageToStore({
      newMessage: {
        id: uuidv4(),
        content: messengerMessages.invalidUndoLastMessageCommand,
      },
      chatHistorySocketId: receiverSocketId,
      messageType: messagesTypes.WARNING,
    });
  }
};

export default undoLastMessage;
