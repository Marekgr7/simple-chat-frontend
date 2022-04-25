import changeOwnNick from "./changeOwnNick";

const chatCommands = {
  NICK: "nick",
  HIGHLIGHT: "highlight",
  OOPS: "oops",
  FADE_LAST: "fadelast",
  HIGHLIGHT: "highlight",
  COUNTDOWN: "countdown",
};

export const chatCommandsList = [
  {
    command: chatCommands.NICK,
    onSuccess: changeOwnNick,
  },
];
