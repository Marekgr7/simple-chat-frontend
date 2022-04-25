import * as chatController from "../chat/chatController";

const chatMessageUndoEventHandler = (chatMessageUndoData) => {
  chatController.removeSpecificMessageFromLocalStore({
    chatHistorySocketId: chatMessageUndoData.senderSocketId,
    messageId: chatMessageUndoData.messageId,
  });
};

export default chatMessageUndoEventHandler;
