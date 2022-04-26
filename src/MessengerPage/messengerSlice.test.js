import messengerReducer, {
  initialState as messengerInitialState,
  setOnlineUsers,
  setChatHistory,
  setMyNick,
  removeSpecificMessage,
  setSpecificMessageAdditionalStyles,
  setCountdownDetails,
} from "./messengerSlice";

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

describe("messenger reducer", () => {
  it("should set online users", () => {
    const initialState = messengerInitialState;
    const action = setOnlineUsers(DUMMY_ONLINE_USERS);
    const result = messengerReducer(initialState, action);

    expect(result.onlineUsers).toEqual(
      expect.arrayContaining(DUMMY_ONLINE_USERS)
    );
  });
});
