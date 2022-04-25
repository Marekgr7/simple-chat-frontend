import * as chatController from "../chat/chatController";

const chatMessageEventHandler = (chatMessageData) => {
  chatController.addMessageToStore({
    chatHistorySocketId: chatMessageData.senderSocketId,
    messageType: chatController.messagesTypes.RECEIVED,
    newMessage: chatMessageData.message,
  });
};

export default chatMessageEventHandler;
