import React from "react";
import { connect } from "react-redux";
import { selectStopwatchItem } from "../../redux/stopwatch/stopwatch.selectors";
import { ReactComponent as StopwatchIcon } from "../../assets/stopwatch.svg";
import { Container, Container2 } from "./stopwatch.styles";
import { showStopwatchChangeAction } from "../../redux/stopwatch/stopwatch.actions";
import StopwatchWindow from "../stopwatch-window/StopwatchWindow";
import { showMenuChangeAction } from "../../redux/navigation/navigation.actions";
const Stopwatch = ({
  stopwatchActive,
  showStopwatchChangeAction,
  showMenuChangeAction,
}) => {
  const handleShowStopwatch = () => {
    showStopwatchChangeAction(!stopwatchActive);
    showMenuChangeAction(false);
  };
  return (
    <Container2>
      <Container>
        <StopwatchIcon onClick={handleShowStopwatch} />
      </Container>
      {stopwatchActive && <StopwatchWindow />}
    </Container2>
  );
};
const mapStateToProps = (state) => ({
  stopwatchActive: selectStopwatchItem(state),
});
const mapDispatchToProps = (dispatch) => ({
  showStopwatchChangeAction: (item) =>
    dispatch(showStopwatchChangeAction(item)),
  showMenuChangeAction: (item) => dispatch(showMenuChangeAction(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);
