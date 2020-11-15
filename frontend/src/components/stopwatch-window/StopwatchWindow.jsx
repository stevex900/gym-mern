import React from "react";
import { connect } from "react-redux";
import {
  selectStopwatchSeries,
  selectStopwatchWorkout,
  selectStopwatchRest,
  selectStopwatchSeriesMinutes,
  selectStopwatchWorkoutMinutes,
  selectStopwatchRestMinutes,
} from "../../redux/stopwatch/stopwatch.selectors";
import {
  seriesChangeValueAction,
  workoutChangeValueAction,
  restChangeValueAction,
  seriesChangeValueActionMinutes,
  workoutChangeValueActionMinutes,
  restChangeValueActionMinutes,
} from "../../redux/stopwatch/stopwatch.actions";
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
const StopwatchWindow = ({
  seriesSeconds,
  workoutSeconds,
  restSeconds,
  seriesMinutes,
  workoutMinutes,
  restMinutes,
  seriesChangeValueAction,
  restChangeValueAction,
  workoutChangeValueAction,
  seriesChangeValueActionMinutes,
  workoutChangeValueActionMinutes,
  restChangeValueActionMinutes,
}) => {
  const handleSerieschange = (bindValue) => {
    if (bindValue === "substract") {
      seriesChangeValueAction(--seriesSeconds);
    } else if (bindValue === "add") {
      seriesChangeValueAction(++seriesSeconds);
    }
  };

  const handleWorkoutOrRestChange = (bindValue) => {
    if (bindValue === "workout-substract") {
      if (workoutSeconds > 0) {
        workoutChangeValueAction(--workoutSeconds);
      } else if (workoutSeconds === 0) {
        workoutChangeValueActionMinutes(--workoutMinutes);
        workoutChangeValueAction((workoutSeconds = 59));
        
      }
    } else if (bindValue === "workout-add") {
      if (workoutSeconds < 59) {
        workoutChangeValueAction(++workoutSeconds);
      } else if (workoutSeconds >= 59) {
        workoutChangeValueAction((workoutSeconds = 0));
        workoutChangeValueActionMinutes(++workoutMinutes);
      }
    } else if (bindValue === "rest-substract") {
      if (restSeconds > 0) {
        restChangeValueAction(--restSeconds);
      } else if (restSeconds === 0) {
        restChangeValueActionMinutes(--restMinutes);
        restChangeValueAction((restSeconds = 59));
      }
    } else if (bindValue === "rest-add") {
      if (restSeconds < 59) {
        restChangeValueAction(++restSeconds);
      } else if (restSeconds >= 59) {
        restChangeValueAction((restSeconds = 0));
        restChangeValueActionMinutes(++restMinutes);
      }
    }
  };
  const stopwatchStartStop = () => {
    console.log("interwal wystartowal");

    if (workoutSeconds > 0) {
      workoutChangeValueAction(--workoutSeconds);
    } else if (workoutSeconds === 0) {
      workoutChangeValueActionMinutes(--workoutMinutes);
      workoutChangeValueAction((workoutSeconds = 59));
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
const mapStateToProps = (state) => ({
  seriesSeconds: selectStopwatchSeries(state),
  workoutSeconds: selectStopwatchWorkout(state),
  restSeconds: selectStopwatchRest(state),

  seriesMinutes: selectStopwatchSeriesMinutes(state),
  workoutMinutes: selectStopwatchWorkoutMinutes(state),
  restMinutes: selectStopwatchRestMinutes(state),
});
const mapDispatchToProps = (dispatch) => ({
  seriesChangeValueAction: (item) => dispatch(seriesChangeValueAction(item)),
  restChangeValueAction: (item) => dispatch(restChangeValueAction(item)),
  workoutChangeValueAction: (item) => dispatch(workoutChangeValueAction(item)),

  seriesChangeValueActionMinutes: (item) =>
    dispatch(seriesChangeValueActionMinutes(item)),
  workoutChangeValueActionMinutes: (item) =>
    dispatch(workoutChangeValueActionMinutes(item)),
  restChangeValueActionMinutes: (item) =>
    dispatch(restChangeValueActionMinutes(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(StopwatchWindow);
