import React from "react";
import {
  MenuContainer,
  ButtonContainer,
  NavLinkContainer as NavLink,
} from "./menu.styles";
import { Button } from "../button/Button.styles";
import { useDispatch, useSelector } from "react-redux";
import { showMenuChangeAction } from "../../redux/actions/navigationActions";

const Menu = () => {
  const dispatch = useDispatch();
  const buttons = [
    { id: 1, name: "Arrange Training", path: "/arrangetraining" },
    { id: 2, name: "View Training", path: "/viewtraining" },
    { id: 3, name: "History", path: "/history" },
    { id: 4, name: "Start", path: "/", exact: true },
  ];
  const handleShowMenu = () => {
    dispatch(showMenuChangeAction(false));
  };
  return (
    <MenuContainer>
      <ButtonContainer>
        {buttons.map((button) => (
          <NavLink
            exact={button.exact ? button.exact : false}
            to={button.path}
            key={button.id}
            onClick={handleShowMenu}
          >
            {button.name}
          </NavLink>
        ))}
      </ButtonContainer>
    </MenuContainer>
  );
};

export default Menu;
