import React from "react";
import styled from "styled-components";

import messages from "../MessengerPage.messages";

const Wrapper = styled.div`
  width: 100%;
  height: 10%;
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

const NewMessageInput = () => {
  return (
    <Wrapper>
      <Input type="text" placeholder={messages.newMessagePlaceholder} />
    </Wrapper>
  );
};

export default NewMessageInput;
