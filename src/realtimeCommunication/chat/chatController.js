export const messagesTypes = {
  RECEIVED: "RECEIVED",
  CREATED: "CREATED",
  WARNING: "WARNING",
};

export const getMessageTypesInArray = () => {
  const messageTypesArray = [];
  for (const [_, value] of Object.entries(messagesTypes)) {
    messageTypesArray.push(value);
  }

  return messageTypesArray;
};
