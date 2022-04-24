import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Label from "../../shared/components/Label";

const Wrapper = styled.div`
  width: 100%;
  height: 10%;
`;

const Navbar = ({ nick, socketId }) => {
  return <Wrapper></Wrapper>;
};

Navbar.propTypes = {
  nick: PropTypes.string,
  socketId: PropTypes.string.isRequired,
};

export default Navbar;
