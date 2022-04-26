import { v4 as uuidv4 } from "uuid";

import addMessageToStore from "../chatStoreActions/addMessageToStore";
import { messagesTypes } from "../chatController";
import { setSpecificMessageAdditionalStyles } from "../../../MessengerPage/messengerSlice";
import messengerMessages from "../../../MessengerPage/MessengerPage.messages";
import store from "../../../store/store";

const validateHighlightCommand = (command = "") => {
  if (command.startsWith("/highlight ")) {
    const messageContent = command.slice(11, command.length);

    return {
      isValid: true,
      messageContent,
    };
  }

  return {
    isValid: false,
  };
};

const highlightMessage = ({ command, receiverSocketId }) => {
  const { isValid, messageContent } = validateHighlightCommand(command);

  if (isValid) {
    findSpecificMessage(messageContent, receiverSocketId);
  } else {
    addMessageToStore({
      newMessage: {
        id: uuidv4(),
        content: messengerMessages.invalidHighlightMessageCommand,
      },
      chatHistorySocketId: receiverSocketId,
      messageType: messagesTypes.WARNING,
    });
  }
};

const findSpecificMessage = (messageContent, receiverSocketId) => {
  const specificChatHistory = store
    .getState()
    .messenger.chatHistory.find(
      (history) => history.socketId === receiverSocketId
    );

  if (!specificChatHistory)
    return addNoMessageExistsToHighlight(receiverSocketId);

  const messagesWithCommandContent = specificChatHistory.messages.filter(
    (m) => m.content === messageContent
  );

  if (messagesWithCommandContent.length < 1)
    return addNoMessageExistsToHighlight(receiverSocketId);

  messagesWithCommandContent.forEach((m) =>
    store.dispatch(
      setSpecificMessageAdditionalStyles({
        messageId: m.id,
        additionalStyles: {
          opacity: 1,
          fontSize: "16px",
          transition: "0.5s",
        },
        chatHistorySocketId: receiverSocketId,
      })
    )
  );
};

const addNoMessageExistsToHighlight = (receiverSocketId) => {
  addMessageToStore({
    newMessage: {
      id: uuidv4(),
      content: messengerMessages.noMessageExistsToHighlight,
    },
    chatHistorySocketId: receiverSocketId,
    messageType: messagesTypes.WARNING,
  });
};

export default highlightMessage;
