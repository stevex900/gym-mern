import React from "react";

import {
  Container,
  LogInContainer,
  Span,
  NavLinkContainer as NavLink,
} from "./header.styles";
import Navigation from "../navigation/Navigation";
import Stopwatch from "../stopwatch/Stopwatch";
const Header = ({ currentUser }) => {
  return (
    <Container>
      <Container>
        <NavLink to="/login">
          <LogInContainer>
            <Span>Log in</Span>
          </LogInContainer>
        </NavLink>
      </Container>
      <Stopwatch />
      <Navigation />
    </Container>
  );
};

export default Header;
