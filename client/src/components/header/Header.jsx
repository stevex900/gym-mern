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
import { showMenuChangeAction } from "../../redux/actions/navigationActions";
import { showStopwatchChangeAction } from "../../redux/actions/stopwatchActions";
const Header = ({ currentUser }) => {
  const menu = useSelector((state) => state.menu);
  const { showMenu } = menu;

  const handleShowMenu = () => {
    dispatch(showMenuChangeAction(false));
    dispatch(showStopwatchChangeAction(false));
  };

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
          <NavLink
            onClick={() => {
              signoutHandler();
              handleShowMenu();
            }}
            to="/"
          >
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
