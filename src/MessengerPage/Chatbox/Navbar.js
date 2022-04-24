import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Label from "../../shared/components/Label";

const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #00bca4 0%, #27dcc5 100%);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Navbar = ({ nick, socketId }) => {
  return (
    <Wrapper>
      <Label text={nick || socketId} fontSize="1em" />
    </Wrapper>
  );
};

Navbar.propTypes = {
  nick: PropTypes.string,
  socketId: PropTypes.string.isRequired,
};

export default Navbar;
