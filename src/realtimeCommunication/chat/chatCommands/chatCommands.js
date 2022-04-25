import changeOwnNick from "./changeOwnNick";

const chatCommands = {
  NICK: "/nick",
  HIGHLIGHT: "/highlight",
  OOPS: "/oops",
  FADE_LAST: "/fadelast",
  HIGHLIGHT: "/highlight",
  COUNTDOWN: "/countdown",
};

export const chatCommandsList = [
  {
    command: chatCommands.NICK,
    onSuccess: changeOwnNick,
  },
];

export const findExecutedCommand = (command = "") => {
  const executedCommand = chatCommandsList.find((c) => {
    return command.startsWith(c.command);
  });

  return executedCommand;
};
