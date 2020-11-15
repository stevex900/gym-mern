import React from "react";
import {
  MenuContainer,
  ButtonContainer,
  NavLinkContainer as NavLink,
} from "./menu.styles";
import { Button } from "../button/Button.styles";
import { connect } from "react-redux";

import { showMenuChangeAction } from "../../redux/navigation/navigation.actions";
const Menu = ({ showMenuChangeAction }) => {
  const buttons = [
    { id: 1, name: "Arrange Training", path: "/arrangetraining" },
    { id: 2, name: "View Training", path: "/viewtraining" },
    { id: 3, name: "History", path: "/history" },
    { id: 4, name: "Start", path: "/", exact: true },
  ];
  const handleShowMenu = () => {
    showMenuChangeAction(false);
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
const mapDispatchToProps = (dispatch) => ({
  showMenuChangeAction: (item) => dispatch(showMenuChangeAction(item)),
});
export default connect(null, mapDispatchToProps)(Menu);
