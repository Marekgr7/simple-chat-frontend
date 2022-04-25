import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { messagesTypes } from "../../realtimeCommunication/chat/chatController";
import WarningMessage from "./SingleMessages/WarningMessage";
import SingleMessage from "./SingleMessages/SingleMessage";

const Wrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const MessagesContainer = ({ chatMessages }) => {
  const scrollRef = useRef();

  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatMessages]);

  return (
    <Wrapper>
      {chatMessages.map((m) => {
        const additionalStyles = m.additionalStyles || {};
        return m.type === messagesTypes.WARNING ? (
          <WarningMessage
            key={m.id}
            content={m.content}
            additionalStyles={additionalStyles}
          />
        ) : (
          <SingleMessage
            key={m.id}
            content={m.content}
            type={m.type}
            additionalStyles={additionalStyles}
          />
        );
      })}
      <div ref={scrollRef} />
    </Wrapper>
  );
};

MessagesContainer.propTypes = {
  chatMessages: PropTypes.array.isRequired,
};

export default MessagesContainer;
