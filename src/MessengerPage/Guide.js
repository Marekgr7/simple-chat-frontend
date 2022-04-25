import React from "react";
import styled from "styled-components";
import { chatCommands } from "../realtimeCommunication/chat/chatCommands/chatCommands";
import Label from "../shared/components/Label";
import messages from "./MessengerPage.messages";

const commandDescriptions = [
  {
    command: chatCommands.OOPS,
    description: messages.undoLastMessageCommandDescription,
  },
  {
    command: chatCommands.NICK,
    description: messages.nickChangeCommandDescription,
  },
  {
    command: chatCommands.FADE_LAST,
    description: messages.fadeLastCommandDescription,
  },
  {
    command: chatCommands.HIGHLIGHT,
    description: messages.highlightMessageCommandDescription,
  },
  {
    command: chatCommands.COUNTDOWN,
    description: messages.countdownCommandDescription,
  },
];

const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Guide = () => {
  return (
    <Wrapper>
      <Label justifyContent="flex-start" text={messages.commands} />
      {commandDescriptions.map((c) => (
        <Label
          key={c.command}
          text={`${c.command} => ${c.description}`}
          fontSize="1em"
          justifyContent="flex-start"
        />
      ))}
    </Wrapper>
  );
};

export default Guide;
