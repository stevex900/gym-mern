import { Nav, LogInContainer } from "./navigation.styles";
import { ReactComponent as Hamburger } from "../../assets/hamburgerS.svg";
import Menu from "../menu/Menu";
import React from "react";
import { connect } from "react-redux";
import { selectMenuItem } from "../../redux/navigation/navigation.selectors";
import { selectStopwatchItem } from "../../redux/stopwatch/stopwatch.selectors";
import { showStopwatchChangeAction } from "../../redux/stopwatch/stopwatch.actions";
import { showMenuChangeAction } from "../../redux/navigation/navigation.actions.js";

const Navigation = ({
  showMenu,
  showMenuChangeAction,
  stopwatchActive,
  showStopwatchChangeAction,
}) => {
  const handleShowMenu = () => {
    showMenuChangeAction(!showMenu);
    showStopwatchChangeAction(false);
  };
  return (
    <Nav>
      <Hamburger onClick={handleShowMenu} />
      {showMenu && <Menu />}
    </Nav>
  );
};
const mapStateToProps = (state) => ({
  showMenu: selectMenuItem(state),
  stopwatchActive: selectStopwatchItem(state),
});
const mapDispatchToProps = (dispatch) => ({
  showMenuChangeAction: (item) => dispatch(showMenuChangeAction(item)),
  showStopwatchChangeAction: (item) =>
    dispatch(showStopwatchChangeAction(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
