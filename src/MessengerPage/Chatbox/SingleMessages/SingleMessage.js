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
`;

const MessageLeft = styled.p`
  display: inline-block;
  padding: 10px;
  margin: 5px 5px;
  border-radius: 25px;
  background: #00bca4;
  font-size: 14px;
  max-width: 80%;
`;

const MessageRight = styled.p`
  display: inline-block;
  padding: 10px;
  margin: 5px 5px;
  border-radius: 25px;
  background: #27dcc5;
  font-size: 14px;
  max-width: 80%;
`;

const SingleMessage = ({ type, content }) => {
  return (
    <Wrapper type={type}>
      {type === messagesTypes.CREATED ? (
        <MessageRight>{content}</MessageRight>
      ) : (
        <MessageLeft>{content}</MessageLeft>
      )}
    </Wrapper>
  );
};

SingleMessage.propTypes = {
  type: PropTypes.oneOf(getMessageTypesInArray()).isRequired,
  content: PropTypes.string.isRequired,
};

export default SingleMessage;
