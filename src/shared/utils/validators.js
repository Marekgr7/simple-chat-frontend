const nickRegexPattern = /^[a-zA-Z]{3,8}$/;

export const validateNick = (nick = "") => {
  return nickRegexPattern.test(nick);
};
