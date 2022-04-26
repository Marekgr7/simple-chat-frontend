import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MessengerPage from "./MessengerPage/MessengerPage";
import { connectWithSocketIOServer } from "./realtimeCommunication/socketConnection";
import CountdownTimer from "./shared/components/CountdownTimer";

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  const countdownDetails = useSelector(
    (state) => state.messenger.countdownDetails
  );

  useEffect(() => {
    connectWithSocketIOServer();
  }, []);

  return (
    <Wrapper>
      <MessengerPage />
      {countdownDetails && (
        <CountdownTimer countdownDetails={countdownDetails} />
      )}
    </Wrapper>
  );
}

export default App;
