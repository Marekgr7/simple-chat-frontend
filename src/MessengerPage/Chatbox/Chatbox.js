import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import MessagesContainer from "./MessagesContainer";
import NewMessageInput from "./NewMessageInput";

const Wrapper = styled.div`
  width: 300px;
  height: 400px;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  background: #f6f9fb;
  border-radius: 16px;
  flex-shrink: 0;
`;

const Chatbox = ({ nick, socketId }) => {
  return (
    <Wrapper>
      <Navbar nick={nick} socketId={socketId} />
      <MessagesContainer />
      <NewMessageInput />
    </Wrapper>
  );
};

Chatbox.propTypes = {
  nick: PropTypes.string,
  socketId: PropTypes.string.isRequired,
};

export default Chatbox;
