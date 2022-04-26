import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
  getMessageTypesInArray,
  messagesTypes,
} from "../../../realtimeCommunication/chat/chatController";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.type === messagesTypes.CREATED ? "flex-end" : "flex-start"};
  animation: message-slide-from-left 0.6s ease 0s 1 normal forwards;
`;

const MessageLeft = styled.p`
  display: inline-block;
  padding: 10px;
  margin: 5px 5px;
  border-radius: 25px;
  background: rgba(211, 211, 211, 0.9);
  font-size: 14px;
  max-width: 80%;
`;

const MessageRight = styled.p`
  display: inline-block;
  padding: 10px;
  margin: 5px 5px;
  border-radius: 25px;
  background: rgba(39, 220, 197, 0.9);
  font-size: 14px;
  max-width: 80%;
`;

const SingleMessage = ({ type, content, additionalStyles }) => {
  return (
    <Wrapper type={type}>
      {type === messagesTypes.CREATED ? (
        <MessageRight style={additionalStyles}>{content}</MessageRight>
      ) : (
        <MessageLeft style={additionalStyles}>{content}</MessageLeft>
      )}
    </Wrapper>
  );
};

SingleMessage.propTypes = {
  type: PropTypes.oneOf(getMessageTypesInArray()).isRequired,
  content: PropTypes.string.isRequired,
  additionalStyles: PropTypes.object.isRequired,
};

export default SingleMessage;
