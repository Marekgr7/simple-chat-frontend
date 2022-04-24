import React from "react";
import styled from "styled-components";

import MessengerPage from "./MessengerPage/MessengerPage";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <MessengerPage />
    </Wrapper>
  );
}

export default App;
