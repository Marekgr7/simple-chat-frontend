import { v4 as uuidv4 } from "uuid";

import * as socketConnection from "../socketConnection";
import store from "../../store/store";
import { setChatHistory } from "../../MessengerPage/messengerSlice";

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

export const processNewChatMessage = ({ message, socketId }) => {
  if (message.startsWith("/")) {
    processNewChatCommand(message);
  } else {
    processSendingChatMessage(message, socketId);
  }
};

const processNewChatCommand = (message = "") => {
  // TODO
  // chat commands
};

const processSendingChatMessage = (message, receiverSocketId) => {
  addCreatedMessageToStore({
    message,
    chatHistorySocketId: receiverSocketId,
    messageType: messagesTypes.CREATED,
  });
  socketConnection.sendNewChatMessage({
    content: message,
    receiverSocketId,
  });
};

const addCreatedMessageToStore = ({
  message,
  chatHistorySocketId,
  messageType,
}) => {
  const chatHistory = store.getState().messenger.chatHistory;
  const specificUserIndex = chatHistory.findIndex(
    (c) => c.socketId === chatHistorySocketId
  );

  const newMessage = {
    content: message,
    type: messageType,
    id: uuidv4(),
  };

  if (specificUserIndex !== -1) {
    let newChatHistory = [...chatHistory];

    newChatHistory[specificUserIndex] = {
      ...newChatHistory[specificUserIndex],
      messages: [...newChatHistory[specificUserIndex].messages, newMessage],
    };

    store.dispatch(setChatHistory(newChatHistory));
  } else {
    const newSpecificChatHistory = {
      socketId: chatHistorySocketId,
      messages: [newMessage],
    };

    store.dispatch(setChatHistory([...chatHistory, newSpecificChatHistory]));
  }
};
