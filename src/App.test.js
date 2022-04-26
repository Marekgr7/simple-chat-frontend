import React from "react";
import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { renderWithContext } from "./testUtils";
import { setCountdownDetails } from "./MessengerPage/messengerSlice";
import App from "./App";
import messages from "./MessengerPage/MessengerPage.messages";

const countdownDetails = {
  amountOfSeconds: 30,
  url: "http://test.com",
};

describe("App page additional features", () => {
  it("show countdown timer when countdownDetails state set", () => {
    jest.useFakeTimers();
    const { store } = renderWithContext(<App />);

    act(() => {
      store.dispatch(setCountdownDetails(countdownDetails));
    });

    const countdownLabelEl = screen.getByText(messages.redirectionInfo, {
      exact: false,
    });

    expect(countdownLabelEl).toBeTruthy();
  });
});
