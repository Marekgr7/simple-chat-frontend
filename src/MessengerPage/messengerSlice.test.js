import messengerReducer, {
  initialState as messengerInitialState,
  setOnlineUsers,
  setChatHistory,
  setMyNick,
  removeSpecificMessage,
  setSpecificMessageAdditionalStyles,
  setCountdownDetails,
} from "./messengerSlice";
import { messagesTypes } from "../realtimeCommunication/chat/chatController";

const DUMMY_ONLINE_USERS = [
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

const DUMMY_CHAT_HISTORY = [
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

const myNick = "Tester";

const countdownDetails = {
  amountOfSeconds: 5,
  url: "http://tester.com",
};

describe("messenger reducer", () => {
  it("should return the initial state when passed an empty action", () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = messengerReducer(initialState, action);

    expect(result).toEqual(messengerInitialState);
  });

  it("should set online users", () => {
    const initialState = messengerInitialState;
    const action = setOnlineUsers(DUMMY_ONLINE_USERS);
    const result = messengerReducer(initialState, action);

    expect(result.onlineUsers).toEqual(
      expect.arrayContaining(DUMMY_ONLINE_USERS)
    );
  });

  it("should set chat history", () => {
    const initialState = messengerInitialState;
    const action = setChatHistory(DUMMY_CHAT_HISTORY);
    const result = messengerReducer(initialState, action);

    expect(result.chatHistory).toEqual(
      expect.arrayContaining(DUMMY_CHAT_HISTORY)
    );
  });

  it("should set myNick property", () => {
    const initialState = messengerInitialState;
    const action = setMyNick(myNick);
    const result = messengerReducer(initialState, action);

    expect(result.myNick).toBe(myNick);
  });

  it("should set countdownDetails property", () => {
    const initialState = messengerInitialState;
    const action = setCountdownDetails(countdownDetails);
    const result = messengerReducer(initialState, action);

    expect(result.countdownDetails).toEqual(countdownDetails);
  });

  it("removes specific message in chatHistory", () => {
    const initialState = {
      ...messengerInitialState,
      chatHistory: DUMMY_CHAT_HISTORY,
    };

    const action = removeSpecificMessage({
      chatHistorySocketId: DUMMY_CHAT_HISTORY[0].socketId,
      messageId: DUMMY_CHAT_HISTORY[0].messages[0].id,
    });

    const result = messengerReducer(initialState, action);

    expect(
      result.chatHistory[0].messages.find(
        (m) => m.id === DUMMY_CHAT_HISTORY[0].messages[0].id
      )
    ).toBe(undefined);

    expect(DUMMY_CHAT_HISTORY[0].messages.length - 1).toBe(
      result.chatHistory[0].messages.length
    );

    expect(DUMMY_CHAT_HISTORY.length).toBe(result.chatHistory.length);
  });

  const additionalStyles = {
    opacity: 1,
  };

  it("should add styles to last message if no messageId provided", () => {
    const initialState = {
      ...messengerInitialState,
      chatHistory: DUMMY_CHAT_HISTORY,
    };

    const action = setSpecificMessageAdditionalStyles({
      chatHistorySocketId: DUMMY_CHAT_HISTORY[0].socketId,
      additionalStyles: additionalStyles,
    });

    const result = messengerReducer(initialState, action);

    expect(
      result.chatHistory[0].messages[result.chatHistory[0].messages.length - 1]
        .additionalStyles
    ).toEqual(additionalStyles);
  });

  it("should add styles to specific message if messageId is provided", () => {
    const initialState = {
      ...messengerInitialState,
      chatHistory: DUMMY_CHAT_HISTORY,
    };

    const action = setSpecificMessageAdditionalStyles({
      messageId: DUMMY_CHAT_HISTORY[0].messages[3].id,
      chatHistorySocketId: DUMMY_CHAT_HISTORY[0].socketId,
      additionalStyles: additionalStyles,
    });

    const result = messengerReducer(initialState, action);

    expect(result.chatHistory[0].messages[3].additionalStyles).toEqual(
      additionalStyles
    );
  });
});
