import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 100%;
`;

const WarningBox = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
`;

const WarningMessage = ({ content }) => {
  return (
    <Wrapper>
      <WarningBox>{content}</WarningBox>
    </Wrapper>
  );
};

WarningMessage.propTypes = {
  content: PropTypes.string.isRequired,
};

export default WarningMessage;
