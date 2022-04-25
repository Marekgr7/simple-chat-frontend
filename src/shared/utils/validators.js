const nickRegexPattern = /^[a-zA-Z]{3,8}$/;
const secondsRegexPattern = /^\d+$/;
const urlRegexPattern =
  /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;

export const validateNick = (nick = "") => {
  return nickRegexPattern.test(nick);
};

export const validateSeconds = (seconds = "") => {
  return secondsRegexPattern.test(seconds);
};

export const validateUrl = (url = "") => {
  return urlRegexPattern.test(url);
};
