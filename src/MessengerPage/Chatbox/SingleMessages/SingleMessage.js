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
    props.type === messagesTypes.CREATED ? "flex-start" : "flex-end"};
`;

const MessageBox = styled.p`
  display: inline-block;
  padding: 10px;
  margin: 0;
`;

const SingleMessage = ({ type, content }) => {
  return (
    <Wrapper type={type}>
      <MessageBox>{content}</MessageBox>
    </Wrapper>
  );
};

SingleMessage.propTypes = {
  type: PropTypes.oneOf(getMessageTypesInArray()).isRequired,
  content: PropTypes.string.isRequired,
};

export default SingleMessage;
