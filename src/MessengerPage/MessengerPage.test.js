import React from "react";
import { screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { renderWithContext } from "../testUtils";
import messages from "./MessengerPage.messages";

import MessengerPage from "./MessengerPage";

const defaultName = "Stranger";

describe("rendering chatboxes", () => {
  it("renders initial MessengerPage component", () => {
    renderWithContext(<MessengerPage />);
    const initialLabel = getInitialPageLabel();

    console.log(initialLabel.innerHTML);
    expect(initialLabel.innerHTML).toBe(`${messages.title} ${defaultName}`);
  });
});

const getInitialPageLabel = () => {
  return screen.getByRole("heading", {
    name: /hello stranger/i,
  });
};
