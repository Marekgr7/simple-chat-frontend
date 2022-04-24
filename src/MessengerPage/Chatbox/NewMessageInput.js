import React, { useState, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import messages from "../MessengerPage.messages";
import * as chatController from "../../realtimeCommunication/chat/chatController";

const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  min-height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #27dcc5;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 80%;
  height: 80%;
  border: none;
  border-radius: 8px;
  padding: 0 15% 0 1%;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px black;
  }
`;

const NewMessageInput = ({ socketId }) => {
  const [message, setMessage] = useState("");

  const handleMessageValueChange = useCallback(
    (event) => {
      setMessage(event.target.value);
    },
    [setMessage]
  );

  const handleKeyPressed = (event) => {
    if (event.code === "Enter" && message.length > 0) {
      proceedChatMessage(message);
      setMessage("");
    }
  };

  const proceedChatMessage = () => {
    chatController.processNewChatMessage({ message, socketId });
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder={messages.newMessagePlaceholder}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      />
    </Wrapper>
  );
};

NewMessageInput.propTypes = {
  socketId: PropTypes.string.isRequired,
};

export default NewMessageInput;
