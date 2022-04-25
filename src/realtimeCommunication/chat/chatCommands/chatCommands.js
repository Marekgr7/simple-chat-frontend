import changeOwnNick from "./changeOwnNick";
import undoLastMessage from "./undoLastMessage";
import fadeLastMessage from "./fadeLastMessage";
import highlightMessage from "./highlightMessage";
import startCountdown from "./startCountdown";

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
  {
    command: chatCommands.FADE_LAST,
    onSuccess: fadeLastMessage,
  },
  {
    command: chatCommands.HIGHLIGHT,
    onSuccess: highlightMessage,
  },
  {
    command: chatCommands.COUNTDOWN,
    onSuccess: startCountdown,
  },
];

export const findExecutedCommand = (command = "") => {
  const executedCommand = chatCommandsList.find((c) => {
    return command.startsWith(c.command);
  });

  return executedCommand;
};
