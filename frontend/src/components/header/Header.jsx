import React from "react";

import {
  Container,
  LogInContainer,
  Span,
  NavLinkContainer as NavLink,
} from "./header.styles";
import Navigation from "../navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import Stopwatch from "../stopwatch/Stopwatch";
import { signout } from "../../redux/actions/userActions";
const Header = ({ currentUser }) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <Container>
      <Container>
        {userInfo ? (
          <NavLink onClick={signoutHandler} to="/login">
            <LogInContainer>
              <Span>Log out {userInfo.name}</Span>
            </LogInContainer>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <LogInContainer>
              <Span>Log in</Span>
            </LogInContainer>
          </NavLink>
        )}
      </Container>
      <Stopwatch />
      <Navigation />
    </Container>
  );
};

export default Header;
