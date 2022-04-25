import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Label from "../shared/components/Label";
import Guide from "./Guide";
import messages from "./MessengerPage.messages";
import Chatbox from "./Chatbox/Chatbox";

import "./messengerPage.css";

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
  const { onlineUsers, myNick } = useSelector((state) => state.messenger);

  return (
    <Wrapper>
      <Label text={`${messages.title} ${myNick}`} />
      <Chatboxes>
        <TransitionGroup component={null}>
          {onlineUsers.map((user) => (
            <CSSTransition
              key={user.socketId}
              timeout={700}
              classNames="chatbox"
            >
              <Chatbox nick={user.nick} socketId={user.socketId} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Chatboxes>
      <Guide />
    </Wrapper>
  );
};

export default MessengerPage;
