import changeOwnNick from "./changeOwnNick";
import undoLastMessage from "./undoLastMessage";

const chatCommands = {
  NICK: "/nick",
  HIGHLIGHT: "/highlight",
  OOPS: "/oops",
  FADE_LAST: "/fadelast",
  COUNTDOWN: "/countdown",
};

export const chatCommandsList = [
  {
    command: chatCommands.NICK,
    onSuccess: changeOwnNick,
  },
  {
    command: chatCommands.OOPS,
    onSuccess: undoLastMessage,
  },
];

export const findExecutedCommand = (command = "") => {
  const executedCommand = chatCommandsList.find((c) => {
    return command.startsWith(c.command);
  });

  return executedCommand;
};
