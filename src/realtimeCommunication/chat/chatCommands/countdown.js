import { v4 as uuidv4 } from "uuid";

import { addMessageToStore, messagesTypes } from "../chatController";
import messengerMessages from "../../../MessengerPage/MessengerPage.messages";
import store from "../../../store/store";
import { validateSeconds, validateUrl } from "../../../shared/utils/validators";

const validateCountdownCommand = (command) => {
  if (command.startsWith("/countdown ")) {
    const commandParts = command.split(" ");

    if (commandParts.length !== 3)
      return {
        isValid: false,
      };

    return {
      isValid: validateSeconds(commandParts[1]) && validateUrl(commandParts[2]),
      amountOfSeconds: commandParts[1],
      url: commandParts[2],
    };
  }

  return {
    isValid: false,
  };
};

const countdown = ({ command, receiverSocketId }) => {
  const { isValid, amountOfSeconds, url } = validateCountdownCommand(command);

  if (!isValid) return addWrongCountdownCommand(receiverSocketId);
};

const addWrongCountdownCommand = (receiverSocketId) => {
  addMessageToStore({
    newMessage: {
      id: uuidv4(),
      content: messengerMessages.wrongCountdownCommand,
    },
    chatHistorySocketId: receiverSocketId,
    messageType: messagesTypes.WARNING,
  });
};

export default countdown;
