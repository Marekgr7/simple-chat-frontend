import { v4 as uuidv4 } from "uuid";

import {
  addMessageToStore,
  messagesTypes,
  removeLastMessageOfSpecificType,
} from "../chatController";
import messengerMessages from "../../../MessengerPage/MessengerPage.messages";
import store from "../../../store/store";

const undoLastMessage = ({ command, receiverSocketId }) => {
  const isCommandValid = command === "/oops";

  if (isCommandValid) {
    const hasAnyMessageBeenSentByMe =
      findIfAnyMessageWasSentByMeToSpecificUser(receiverSocketId);

    hasAnyMessageBeenSentByMe
      ? processUndoLastMessage(receiverSocketId)
      : addNoMessageExistsWarning(receiverSocketId);
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

const processUndoLastMessage = (receiverSocketId) => {
  removeLastMessageOfSpecificType({
    chatHistorySocketId: receiverSocketId,
    type: messagesTypes.CREATED,
  });
};

const addNoMessageExistsWarning = (receiverSocketId) => {
  addMessageToStore({
    newMessage: {
      id: uuidv4(),
      content: messengerMessages.noMessageExistsToUndo,
    },
    chatHistorySocketId: receiverSocketId,
    messageType: messagesTypes.WARNING,
  });
};

export default undoLastMessage;
