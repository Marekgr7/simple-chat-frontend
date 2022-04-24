import React from "react";
import styled from "styled-components";

import Label from "../shared/components/Label";
import Guide from "./Guide";
import messages from "./MessengerPage.messages";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Chatboxes = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  height: 450px;
`;

const MessengerPage = () => {
  return (
    <Wrapper>
      <Label text={messages.title} />
      <Chatboxes />
      <Guide />
    </Wrapper>
  );
};

export default MessengerPage;
