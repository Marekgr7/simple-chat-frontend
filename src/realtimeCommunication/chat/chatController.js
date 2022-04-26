import { v4 as uuidv4 } from "uuid";

import * as socketConnection from "../socketConnection";
import store from "../../store/store";
import {
  setChatHistory,
  removeSpecificMessage,
} from "../../MessengerPage/messengerSlice";
import { findExecutedCommand } from "./chatCommands/chatCommands";
import messengerMessages from "../../MessengerPage/MessengerPage.messages";

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
    // execute successCallback related with specific command
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

export const addMessageToStore = ({
  newMessage,
  chatHistorySocketId,
  messageType,
}) => {
  const chatHistory = store.getState().messenger.chatHistory;
  const specificUserIndex = chatHistory.findIndex(
    (c) => c.socketId === chatHistorySocketId
  );

  const newStoreMessage = {
    ...newMessage,
    type: messageType,
  };

  if (specificUserIndex !== -1) {
    let newChatHistory = [...chatHistory];

    newChatHistory[specificUserIndex] = {
      ...newChatHistory[specificUserIndex],
      messages: [
        ...newChatHistory[specificUserIndex].messages,
        newStoreMessage,
      ],
    };

    store.dispatch(setChatHistory(newChatHistory));
  } else {
    const newSpecificChatHistory = {
      socketId: chatHistorySocketId,
      messages: [newStoreMessage],
    };

    store.dispatch(setChatHistory([...chatHistory, newSpecificChatHistory]));
  }
};

export const removeLastMessageOfSpecificType = ({
  chatHistorySocketId,
  type,
}) => {
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

export const removeSpecificMessageFromLocalStore = ({
  messageId,
  chatHistorySocketId,
}) => {
  store.dispatch(
    removeSpecificMessage({
      messageId,
      chatHistorySocketId,
    })
  );
};
