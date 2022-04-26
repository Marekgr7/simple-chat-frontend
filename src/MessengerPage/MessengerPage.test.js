import React from "react";
import { screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import user from "@testing-library/user-event";
import { renderWithContext } from "../testUtils";
import messages from "./MessengerPage.messages";
import MessengerPage from "./MessengerPage";
import { setOnlineUsers } from "../MessengerPage/messengerSlice";
import { DUMMY_ONLINE_USERS } from "../MessengerPage/messengerSlice.dummy";

const defaultNick = "Stranger";

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
