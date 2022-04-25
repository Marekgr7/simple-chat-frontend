import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 100%;
  animation: message-scale-in 0.5s ease 0s 1 normal forwards;
`;

const WarningBox = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
`;

const WarningMessage = ({ content, additionalStyles }) => {
  return (
    <Wrapper>
      <WarningBox style={additionalStyles}>{content}</WarningBox>
    </Wrapper>
  );
};

WarningMessage.propTypes = {
  content: PropTypes.string.isRequired,
  additionalStyles: PropTypes.object.isRequired,
};

export default WarningMessage;
