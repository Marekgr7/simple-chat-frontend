import { validateNick } from "../../../shared/utils/validators";
import { addMessageToStore, messagesTypes } from "../chatController";
import { v4 as uuidv4 } from "uuid";
import messengerMessages from "../../../MessengerPage/MessengerPage.messages";

const validateNickCommand = (command = "") => {
  if (command.startsWith("/nick ")) {
    const nick = command.slice(6, command.length);

    return {
      isValid: validateNick(nick),
      nick: nick,
    };
  }

  return {
    isValid: false,
  };
};

const changeOwnNick = ({ command, receiverSocketId }) => {
  const { isValid, nick } = validateNickCommand(command);

  if (isValid) {
  } else {
    addMessageToStore({
      newMessage: {
        id: uuidv4(),
        content: messengerMessages.invalidNickCommand,
      },
      chatHistorySocketId: receiverSocketId,
      messageType: messagesTypes.WARNING,
    });
  }
};

export default changeOwnNick;
