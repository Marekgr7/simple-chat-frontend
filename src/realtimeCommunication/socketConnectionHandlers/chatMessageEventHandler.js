import * as chatController from "../chat/chatController";

const chatMessageEventHandler = (chatMessageData) => {
  chatController.addMessageToStore({
    chatHistorySocketId: chatMessageData.senderSocketId,
    messageType: chatController.messagesTypes.RECEIVED,
    newMessage: chatMessageData.message,
    additionalStyles: chatMessageData.additionalStyles,
  });
};

export default chatMessageEventHandler;
