import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const MessagesContainer = () => {
  return <Wrapper>Messages</Wrapper>;
};

export default MessagesContainer;
