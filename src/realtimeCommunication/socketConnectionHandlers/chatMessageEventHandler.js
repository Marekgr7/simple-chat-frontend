import addMessageToStore from "../../realtimeCommunication/chat/chatStoreActions/addMessageToStore";
import { messagesTypes } from "../chat/chatController";

const chatMessageEventHandler = (chatMessageData) => {
  addMessageToStore({
    chatHistorySocketId: chatMessageData.senderSocketId,
    messageType: messagesTypes.RECEIVED,
    newMessage: chatMessageData.message,
    additionalStyles: chatMessageData.additionalStyles,
  });
};

export default chatMessageEventHandler;
