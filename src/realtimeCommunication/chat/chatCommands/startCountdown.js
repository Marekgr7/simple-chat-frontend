import { v4 as uuidv4 } from "uuid";

import { addMessageToStore, messagesTypes } from "../chatController";
import messengerMessages from "../../../MessengerPage/MessengerPage.messages";
import store from "../../../store/store";
import { validateSeconds, validateUrl } from "../../../shared/utils/validators";
import { setCountdownDetails } from "../../../MessengerPage/messengerSlice";

const validateCountdownCommand = (command) => {
  if (command.startsWith("/countdown ")) {
    const commandParts = command.split(" ");
    console.log(commandParts);

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

const startCountdown = ({ command, receiverSocketId }) => {
  const { isValid, amountOfSeconds, url } = validateCountdownCommand(command);
  if (!isValid) return addWrongCountdownCommandMessage(receiverSocketId);

  const countdownAlreadyStarted = store.getState().messenger.countdownDetails;
  countdownAlreadyStarted
    ? addCountdownAlreadyStartedMessage(receiverSocketId)
    : proceedToCountdown({
        amountOfSeconds,
        url,
        receiverSocketId,
      });
};

const addWrongCountdownCommandMessage = (receiverSocketId) => {
  addMessageToStore({
    newMessage: {
      id: uuidv4(),
      content: messengerMessages.wrongCountdownCommand,
    },
    chatHistorySocketId: receiverSocketId,
    messageType: messagesTypes.WARNING,
  });
};

const addCountdownAlreadyStartedMessage = (receiverSocketId) => {
  addMessageToStore({
    newMessage: {
      id: uuidv4(),
      content: messengerMessages.countdownAlreadyStarted,
    },
    chatHistorySocketId: receiverSocketId,
    messageType: messagesTypes.WARNING,
  });
};

const proceedToCountdown = ({ receiverSocketId, amountOfSeconds, url }) => {
  // start local countdown
  store.dispatch(
    setCountdownDetails({
      amountOfSeconds,
      url,
    })
  );

  // emit to seconds user that he should start countdown
};

export default startCountdown;
