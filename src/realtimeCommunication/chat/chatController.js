import { v4 as uuidv4 } from "uuid";

import * as socketConnection from "../socketConnection";
import { findExecutedCommand } from "./chatCommands/chatCommands";
import messengerMessages from "../../MessengerPage/MessengerPage.messages";
import addMessageToStore from "./chatStoreActions/addMessageToStore";

export const messagesTypes = {
  RECEIVED: "RECEIVED",
  CREATED: "CREATED",
  WARNING: "WARNING",
};

export const getMessageTypesInArray = () => {
  const messageTypesArray = [];
  for (const [_, value] of Object.entries(messagesTypes)) {
    messageTypesArray.push(value);
  }

  return messageTypesArray;
};

export const processNewChatMessage = ({ messageContent, socketId }) => {
  if (messageContent.startsWith("/")) {
    processNewChatCommand(messageContent, socketId);
  } else {
    processSendingChatMessage(messageContent, socketId);
  }
};

const processNewChatCommand = (messageContent = "", socketId) => {
  const commandDetails = findExecutedCommand(messageContent);

  if (!commandDetails) {
    addMessageToStore({
      newMessage: {
        id: uuidv4(),
        content: messengerMessages.invalidCommand,
      },
      chatHistorySocketId: socketId,
      messageType: messagesTypes.WARNING,
    });
  } else {
    commandDetails.onSuccess({
      receiverSocketId: socketId,
      command: messageContent,
    });
  }
};

export const processSendingChatMessage = (
  messageContent,
  receiverSocketId,
  additionalStyles = {}
) => {
  const newMessage = {
    id: uuidv4(),
    content: messageContent,
    additionalStyles,
  };

  addMessageToStore({
    newMessage,
    chatHistorySocketId: receiverSocketId,
    messageType: messagesTypes.CREATED,
  });
  socketConnection.sendNewChatMessage({
    message: newMessage,
    receiverSocketId,
  });
};
