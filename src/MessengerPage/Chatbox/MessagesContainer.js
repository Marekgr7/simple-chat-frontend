import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const MessagesContainer = ({ chatMessages }) => {
  return (
    <Wrapper>
      {chatMessages.map((m) => (
        <div key={m.id}>{m.content}</div>
      ))}
    </Wrapper>
  );
};

MessagesContainer.propTypes = {
  chatMessages: PropTypes.array.isRequired,
};

export default MessagesContainer;
