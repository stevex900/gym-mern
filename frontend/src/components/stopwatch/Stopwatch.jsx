import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as StopwatchIcon } from "../../assets/stopwatch.svg";
import { Container, Container2 } from "./stopwatch.styles";

import StopwatchWindow from "../stopwatch-window/StopwatchWindow";
import { showStopwatchChangeAction } from "../../redux/actions/stopwatchActions";
import { showMenuChangeAction } from "../../redux/actions/navigationActions";

const Stopwatch = () => {
  const stopwatch = useSelector((state) => state.stopwatch);
  const { stopwatchActive } = stopwatch;
  const dispatch = useDispatch();
  const handleShowStopwatch = () => {
    dispatch(showStopwatchChangeAction(!stopwatchActive));
    dispatch(showMenuChangeAction(false));
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

export default Stopwatch;
