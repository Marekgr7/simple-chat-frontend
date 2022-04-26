import { v4 as uuidv4 } from "uuid";

import addMessageToStore from "../chatStoreActions/addMessageToStore";
import { validateIfStringIncludesOnlySpaces } from "../../../shared/utils/validators";
import * as chatController from "../chatController";
import messengerMessages from "../../../MessengerPage/MessengerPage.messages";

const thinkMessageAdditionalStyles = {
  color: "gray",
};

const validateThinkCommand = (command = "") => {
  if (command.startsWith("/think ")) {
    const messageContent = command.slice(7, command.length);

    return {
      isValid:
        messageContent.length > 0 &&
        !validateIfStringIncludesOnlySpaces(messageContent),
      messageContent,
    };
  }

  return {
    isValid: false,
  };
};

const thinkMessage = ({ command, receiverSocketId }) => {
  const { isValid, messageContent } = validateThinkCommand(command);

  if (isValid) {
    chatController.processSendingChatMessage(
      messageContent,
      receiverSocketId,
      thinkMessageAdditionalStyles
    );
  } else {
    addMessageToStore({
      newMessage: {
        id: uuidv4(),
        content: messengerMessages.invalidThinkMessageCommand,
      },
      chatHistorySocketId: receiverSocketId,
      messageType: chatController.messagesTypes.WARNING,
    });
  }
};

export default thinkMessage;
