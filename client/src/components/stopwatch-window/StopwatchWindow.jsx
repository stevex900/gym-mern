import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  restChangeValueAction,
  restChangeValueActionMinutes,
  seriesChangeValueAction,
  workoutChangeValueAction,
  workoutChangeValueActionMinutes,
} from "../../redux/actions/stopwatchActions";

import {
  MainContainer,
  PrimaryContainer,
  SecondaryContainer,
  TertiaryContainer,
  QuaternaryContainer,
  P,
  Button,
  Span,
} from "./stopwatchWindow.styles";
const StopwatchWindow = () => {
  const stopwatch = useSelector((state) => state.stopwatch);
  let {
    seriesSeconds,
    workoutSeconds,

    workoutMinutes,
    restMinutes,
    restSeconds,
  } = stopwatch;
  const dispatch = useDispatch();
  const handleSerieschange = (bindValue) => {
    if (bindValue === "substract") {
      dispatch(seriesChangeValueAction(--seriesSeconds));
    } else if (bindValue === "add") {
      dispatch(seriesChangeValueAction(++seriesSeconds));
    }
  };

  const handleWorkoutOrRestChange = (bindValue) => {
    if (bindValue === "workout-substract") {
      if (workoutSeconds > 0) {
        dispatch(workoutChangeValueAction(--workoutSeconds));
      } else if (workoutSeconds === 0) {
        dispatch(workoutChangeValueActionMinutes(--workoutMinutes));
        dispatch(workoutChangeValueAction((workoutSeconds = 59)));
      }
    } else if (bindValue === "workout-add") {
      if (workoutSeconds < 59) {
        dispatch(workoutChangeValueAction(++workoutSeconds));
      } else if (workoutSeconds >= 59) {
        dispatch(workoutChangeValueAction((workoutSeconds = 0)));
        dispatch(workoutChangeValueActionMinutes(++workoutMinutes));
      }
    } else if (bindValue === "rest-substract") {
      if (restSeconds > 0) {
        dispatch(restChangeValueAction(--restSeconds));
      } else if (restSeconds === 0) {
        if (restSeconds === 0 && restMinutes === 0) {
          dispatch(seriesChangeValueAction(--seriesSeconds));
        }
        dispatch(restChangeValueActionMinutes(--restMinutes));
        dispatch(restChangeValueAction((restSeconds = 59)));
        // dispatch(seriesChangeValueAction(--seriesSeconds));
      }
    } else if (bindValue === "rest-add") {
      if (restSeconds < 59) {
        dispatch(restChangeValueAction(++restSeconds));
      } else if (restSeconds >= 59) {
        dispatch(restChangeValueAction((restSeconds = 0)));
        dispatch(restChangeValueActionMinutes(++restMinutes));
      }
    }
  };
  const stopwatchStartStop = () => {
    console.log("interwal wystartowal");

    if (workoutSeconds > 0) {
      dispatch(workoutChangeValueAction(--workoutSeconds));
    } else if (workoutSeconds === 0) {
      dispatch(workoutChangeValueActionMinutes(--workoutMinutes));
      dispatch(workoutChangeValueAction((workoutSeconds = 59)));
    }
  };
  const stopWatchInterval = () => setInterval(stopwatchStartStop, 1000);

  const handleStopWatchStart = () => {
    stopWatchInterval();
  };

  return (
    <MainContainer>
      <PrimaryContainer>
        <SecondaryContainer>
          <P>SERIES</P>
          <TertiaryContainer>
            <QuaternaryContainer>
              <Button onClick={handleSerieschange.bind(this, "substract")}>
                -
              </Button>
            </QuaternaryContainer>
            <Span> {seriesSeconds} </Span>
            <QuaternaryContainer>
              <Button onClick={handleSerieschange.bind(this, "add")}>
                {" "}
                +{" "}
              </Button>
            </QuaternaryContainer>
          </TertiaryContainer>
        </SecondaryContainer>
        <SecondaryContainer>
          <P>WORKOUT</P>
          <TertiaryContainer>
            <QuaternaryContainer>
              <Button
                onClick={handleWorkoutOrRestChange.bind(
                  this,
                  "workout-substract"
                )}
              >
                -
              </Button>
            </QuaternaryContainer>
            <Span>
              {" "}
              {`${workoutMinutes < 10 ? "0" + workoutMinutes : workoutMinutes}`}
              :
              {`${workoutSeconds < 10 ? "0" + workoutSeconds : workoutSeconds}`}
            </Span>
            <QuaternaryContainer>
              <Button
                onClick={handleWorkoutOrRestChange.bind(this, "workout-add")}
              >
                +
              </Button>
            </QuaternaryContainer>
          </TertiaryContainer>
        </SecondaryContainer>
        <SecondaryContainer>
          <P>REST</P>
          <TertiaryContainer>
            <QuaternaryContainer>
              <Button
                onClick={handleWorkoutOrRestChange.bind(this, "rest-substract")}
              >
                -
              </Button>
            </QuaternaryContainer>
            <Span>
              {" "}
              {`${restMinutes < 10 ? "0" + restMinutes : restMinutes}`}:
              {`${restSeconds < 10 ? "0" + restSeconds : restSeconds}`}
            </Span>
            <QuaternaryContainer>
              <Button
                onClick={handleWorkoutOrRestChange.bind(this, "rest-add")}
              >
                +
              </Button>
            </QuaternaryContainer>
          </TertiaryContainer>
        </SecondaryContainer>
        <Button onClick={handleStopWatchStart}>Start</Button>
      </PrimaryContainer>
    </MainContainer>
  );
};

export default StopwatchWindow;
