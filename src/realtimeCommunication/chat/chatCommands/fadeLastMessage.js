import { v4 as uuidv4 } from "uuid";

import { addMessageToStore, messagesTypes } from "../chatController";
import { setSpecificMessageAdditionalStyles } from "../../../MessengerPage/messengerSlice";
import messengerMessages from "../../../MessengerPage/MessengerPage.messages";
import store from "../../../store/store";

const processFadeLastMessage = (receiverSocketId) => {
  store.dispatch(
    setSpecificMessageAdditionalStyles({
      chatHistorySocketId: receiverSocketId,
      additionalStyles: {
        transition: "0.5s",
        opacity: "0.1",
      },
    })
  );
};

const addNoMessageExistsToFade = (receiverSocketId) => {
  addMessageToStore({
    newMessage: {
      id: uuidv4(),
      content: messengerMessages.noMessageExistsToFade,
    },
    chatHistorySocketId: receiverSocketId,
    messageType: messagesTypes.WARNING,
  });
};

const fadeLastMessage = ({ command, receiverSocketId }) => {
  const isCommandValid = command === "/fadelast";

  if (isCommandValid) {
    const anyMessageExists = store
      .getState()
      .messenger.chatHistory.find(
        (history) => history.socketId === receiverSocketId
      );

    anyMessageExists
      ? processFadeLastMessage(receiverSocketId)
      : addNoMessageExistsToFade(receiverSocketId);
  } else {
    addMessageToStore({
      newMessage: {
        id: uuidv4(),
        content: messengerMessages.invalidFadeLastMessageCommand,
      },
      chatHistorySocketId: receiverSocketId,
      messageType: messagesTypes.WARNING,
    });
  }
};

export default fadeLastMessage;
