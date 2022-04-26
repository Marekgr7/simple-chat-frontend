import React from "react";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

import { renderWithContext } from "../testUtils";
import messages from "./MessengerPage.messages";
import MessengerPage from "./MessengerPage";
import {
  setOnlineUsers,
  setChatHistory,
} from "../MessengerPage/messengerSlice";
import { DUMMY_ONLINE_USERS } from "../MessengerPage/messengerSlice.dummy";
import { messagesTypes } from "../realtimeCommunication/chat/chatController";

const defaultNick = "Stranger";

const singleOnlineUser = {
  socketId: "123",
  nick: "Test",
};

const singleMessage = {
  id: "12334",
  content: "test message",
  type: messagesTypes.CREATED,
};

describe("rendering MessengerPage", () => {
  it("renders initial MessengerPage component", () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    renderWithContext(<MessengerPage />);
    const initialLabel = getInitialTitleLabel();
    const commandsLabel = getCommandsLabel();

    expect(initialLabel.innerHTML).toBe(`${messages.title} ${defaultNick}`);
    expect(commandsLabel.innerHTML).toBe(`${messages.commands}`);
  });

  it("render chatboxes after setting in store online users", () => {
    const { store } = renderWithContext(<MessengerPage />);

    act(() => {
      store.dispatch(setOnlineUsers(DUMMY_ONLINE_USERS));
    });

    const chatboxInputs = getChatboxesNewMessageInputs();
    expect(chatboxInputs.length).toBe(DUMMY_ONLINE_USERS.length);
  });

  it("render chatboxes after setting in store online users and removes them after resetting online users", () => {
    const { store } = renderWithContext(<MessengerPage />);

    act(() => {
      store.dispatch(setOnlineUsers(DUMMY_ONLINE_USERS));
    });

    const chatboxInputs = getChatboxesNewMessageInputs();
    expect(chatboxInputs.length).toBe(DUMMY_ONLINE_USERS.length);

    act(() => {
      store.dispatch(setOnlineUsers([]));
    });

    // awating for animation end when removing chatboxes
    setTimeout(() => {
      const chatboxInputsAfterResettingState = getChatboxesNewMessageInputs();
      expect(chatboxInputsAfterResettingState.length).toBe(0);
    }, [1000]);
  });

  it("chatbox input value changes when user is typing", () => {
    const { store } = renderWithContext(<MessengerPage />);

    act(() => {
      store.dispatch(setOnlineUsers([singleOnlineUser]));
    });

    const chatboxNewMessageInputs = getChatboxesNewMessageInputs();

    expect(chatboxNewMessageInputs.length).toBe(1);

    const singleChatboxInput = chatboxNewMessageInputs[0];

    userEvent.type(singleChatboxInput, "Hello");

    waitFor(() => {
      expect(singleChatboxInput.value).toBe("Hello");
    });
  });

  it("chatbox renders message after setting chatHistory ", () => {
    const { store } = renderWithContext(<MessengerPage />);

    act(() => {
      store.dispatch(setOnlineUsers([singleOnlineUser]));
    });

    const chatboxNewMessageInputs = getChatboxesNewMessageInputs();

    expect(chatboxNewMessageInputs.length).toBe(1);

    act(() => {
      store.dispatch(
        setChatHistory([
          {
            socketId: singleOnlineUser.socketId,
            messages: [singleMessage],
          },
        ])
      );
    });

    const chatboxMessage = getChatboxMessageByText(singleMessage.content);
    expect(chatboxMessage.innerHTML).toBe(singleMessage.content);
  });
});

const getInitialTitleLabel = () => {
  return screen.getByText(`${messages.title} ${defaultNick}`, { exact: false });
};

const getCommandsLabel = () => {
  return screen.getByText(`${messages.commands}`, { exact: false });
};

const getChatboxesNewMessageInputs = () => {
  return screen.getAllByPlaceholderText(`${messages.newMessagePlaceholder}`, {
    exact: false,
  });
};

const getChatboxMessageByText = (messageText) => {
  return screen.getByText(messageText);
};
