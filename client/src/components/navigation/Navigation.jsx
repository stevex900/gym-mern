import { Nav } from "./navigation.styles";
import { ReactComponent as Hamburger } from "../../assets/hamburgerS.svg";
import Menu from "../menu/Menu";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showMenuChangeAction } from "../../redux/actions/navigationActions";
import { showStopwatchChangeAction } from "../../redux/actions/stopwatchActions";

const Navigation = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const menu = useSelector((state) => state.menu);
  const { showMenu } = menu;
  const dispatch = useDispatch();
  const handleShowMenu = () => {
    dispatch(showMenuChangeAction(!showMenu));
    dispatch(showStopwatchChangeAction(false));
  };
  return (
    <Nav>
      {userInfo && <Hamburger onClick={handleShowMenu} />}
      {showMenu && <Menu />}
    </Nav>
  );
};

export default Navigation;
