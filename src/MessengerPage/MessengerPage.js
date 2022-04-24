import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Label from "../shared/components/Label";
import Guide from "./Guide";
import messages from "./MessengerPage.messages";
import Chatbox from "./Chatbox/Chatbox";

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
  const onlineUsers = useSelector((state) => state.messenger.onlineUsers);

  return (
    <Wrapper>
      <Label text={messages.title} />
      <Chatboxes>
        {onlineUsers.map((user) => (
          <Chatbox
            key={user.socketId}
            nick={user.nick}
            socketId={user.socketId}
          />
        ))}
      </Chatboxes>
      <Guide />
    </Wrapper>
  );
};

export default MessengerPage;
