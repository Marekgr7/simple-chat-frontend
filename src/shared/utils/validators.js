const nickRegexPattern = /^[a-zA-Z]{3,8}$/;
const secondsRegexPattern = /^\d+$/;
const urlRegexPattern =
  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

export const validateNick = (nick = "") => {
  return nickRegexPattern.test(nick);
};

export const validateSeconds = (seconds = "") => {
  return secondsRegexPattern.test(seconds);
};

export const validateUrl = (url = "") => {
  return urlRegexPattern.test(url);
};

export const validateIfStringIncludesOnlySpaces = (str = "") => {
  return str.trim().length === 0;
};
