import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: ${(props) => props.fontSize || "2em"};
`;

const Label = ({ fontSize, text, justifyContent }) => {
  return (
    <Wrapper justifyContent={justifyContent}>
      <Title fontSize={fontSize}>{text}</Title>
    </Wrapper>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  justifyContent: PropTypes.string,
};

export default Label;
