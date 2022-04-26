import { messagesTypes } from "../realtimeCommunication/chat/chatController";

export const DUMMY_ONLINE_USERS = [
  {
    socketId: "123",
    nick: "TestUser",
  },
  {
    socketId: "345",
    nick: "Test",
  },
  {
    socketId: "567",
    nick: null,
  },
];

export const DUMMY_CHAT_HISTORY = [
  {
    socketId: "123",
    messages: [
      {
        id: 1,
        type: messagesTypes.CREATED,
        content: "Hello world",
        additionalStyles: {
          fontSize: "16px",
          color: "grey",
        },
      },
      {
        id: 2,
        type: messagesTypes.RECEIVED,
        content: "Hello",
        additionalStyles: {},
      },
      {
        id: 3,
        type: messagesTypes.WARNING,
        content: "Command invalid. Please enter valid command",
        additionalStyles: {},
      },
      {
        id: 4,
        type: messagesTypes.CREATED,
        content:
          "Command invalid. Please enter valid command. Command invalid. Please enter valid command. Command invalid. Please enter valid command.",
        additionalStyles: {},
      },
    ],
  },
];
