import React from "react";
import {
  MenuContainer,
  ButtonContainer,
  NavLinkContainer as NavLink,
} from "./menu.styles";

import { useDispatch, useSelector } from "react-redux";
import { showMenuChangeAction } from "../../redux/actions/navigationActions";

const Menu = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const buttons = [
    {
      id: 1,
      name: "Arrange Training",
      path: `/arrangetraining/${userSignin.userInfo._id}`,
    },
    {
      id: 2,
      name: "View Training",
      path: `/viewtraining/${userSignin.userInfo._id}`,
    },
    { id: 3, name: "History", path: `/history/${userSignin.userInfo._id}` },
    { id: 4, name: "Home Page", path: `/`, exact: true },
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
