import store from "../../../store/store";
import { setChatHistory } from "../../../MessengerPage/messengerSlice";

const addMessageToStore = ({
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

export default addMessageToStore;
