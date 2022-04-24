import React, { useEffect } from "react";
import styled from "styled-components";

import MessengerPage from "./MessengerPage/MessengerPage";
import { connectWithSocketIOServer } from "./realtimeCommunication/socketConnection";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  useEffect(() => {
    connectWithSocketIOServer();
  }, []);

  return (
    <Wrapper>
      <MessengerPage />
    </Wrapper>
  );
}

export default App;
