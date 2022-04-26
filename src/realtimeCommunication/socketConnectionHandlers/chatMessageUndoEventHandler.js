import removeSpecificMessageFromLocalStore from "../../realtimeCommunication/chat/chatStoreActions/removeSpecificMessageFromLocalStore";

const chatMessageUndoEventHandler = (chatMessageUndoData) => {
  removeSpecificMessageFromLocalStore({
    chatHistorySocketId: chatMessageUndoData.senderSocketId,
    messageId: chatMessageUndoData.messageId,
  });
};

export default chatMessageUndoEventHandler;
