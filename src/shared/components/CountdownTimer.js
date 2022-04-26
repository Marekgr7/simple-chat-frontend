import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import messages from "../../MessengerPage/MessengerPage.messages";

const Wrapper = styled.p`
  position: absolute;
  top: 50px;
  right: 50px;
  font-size: 32px;
  font-weight: bold;
`;

const CountdownTimer = ({ countdownDetails }) => {
  const [amountOfSeconds, setAmountOfSeconds] = useState(
    Number(countdownDetails.amountOfSeconds)
  );

  useEffect(() => {
    setInterval(() => {
      setAmountOfSeconds((prevState) => prevState - 1);
    }, [1000]);
  }, []);

  useEffect(() => {
    if (amountOfSeconds < 1) {
      window.location.href = countdownDetails.url.toString();
    }
  }, [amountOfSeconds, countdownDetails.url]);

  return <Wrapper>{`${messages.redirectionInfo} ${amountOfSeconds}`}</Wrapper>;
};

CountdownTimer.propTypes = {
  countdownDetails: PropTypes.object.isRequired,
};

export default CountdownTimer;
