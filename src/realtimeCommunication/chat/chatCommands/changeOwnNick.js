import { validateNick } from "../../../shared/utils/validators";

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

const changeOwnNick = ({ command }) => {
  const { isValid, nick } = validateNickCommand(command);
};

export default changeOwnNick;
