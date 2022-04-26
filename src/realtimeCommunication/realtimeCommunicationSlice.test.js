import realtimeCommunicationReducer, {
  setOwnSocketId,
  initialState as realtimeCommunicationInitialState,
} from "./realtimeCommunicationSlice";

const ownSocketId = "1234";

describe("realtimeCommunication reducer", () => {
  it("should return the initial state when passed an empty action", () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = realtimeCommunicationReducer(initialState, action);

    expect(result).toEqual(realtimeCommunicationInitialState);
  });

  it("should set socketId property", () => {
    const action = setOwnSocketId(ownSocketId);

    const result = realtimeCommunicationReducer(
      realtimeCommunicationInitialState,
      action
    );
    expect(result.ownSocketId).toBe(ownSocketId);
  });
});
