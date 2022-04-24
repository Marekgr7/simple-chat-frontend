import React from "react";
import styled from "styled-components";

import Label from "../shared/components/Label";
import messages from "./MessengerPage.messages";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MessengerPage = () => {
  return (
    <Wrapper>
      <Label text={messages.title} />
    </Wrapper>
  );
};

export default MessengerPage;
