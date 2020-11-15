import React from "react";
import { MainContainer } from "./history.styles";
import { connect } from "react-redux";
import { Button } from "../../components/button/Button.styles";
import {
  WorkoutContainer,
  WorkoutTimeContainer,
  ExerciseName,
  ExerciseData,
  ExerciseDataItemContainer,
  HistoryContainer,
  ExerciseDataItem,
  ComparisonContainer,
  Container,
} from "./history.styles";
import {
  selectHistoryTrainingItem,
  selectHistoryTrainingNumber,
} from "../../redux/history/history.selector";
const History = ({ allTrainingsHistory }) => {
  const historyList = [...allTrainingsHistory];

  const historyWorkout = historyList.map((historyItem) => (
    <HistoryContainer key={historyItem.id}>
      <WorkoutTimeContainer>{historyItem.date}</WorkoutTimeContainer>
      <WorkoutContainer>
        {historyItem.history.map((item) => (
          <Container>
            <ExerciseName>{item.exerciseName}</ExerciseName>
            <ComparisonContainer>
              <ExerciseData>
                Planned
                {item.exercise.map((item) => (
                  <ExerciseDataItemContainer key={item.series}>
                    <ExerciseDataItem>{`${
                      item.repetitions && item.repetitions + "x"
                    }`}</ExerciseDataItem>
                    <ExerciseDataItem>
                      {" "}
                      {`${item.weight && item.weight + "kg"}`}
                    </ExerciseDataItem>
                  </ExerciseDataItemContainer>
                ))}
              </ExerciseData>
              <ExerciseData>
                Done
                {item.exercise.map((item) => (
                  <ExerciseDataItemContainer key={item.series}>
                    <ExerciseDataItem>{`${
                      item.myRepetitions && item.myRepetitions + "x"
                    }`}</ExerciseDataItem>
                    <ExerciseDataItem>
                      {" "}
                      {`${item.myWeight && item.myWeight + "kg"}`}
                    </ExerciseDataItem>
                  </ExerciseDataItemContainer>
                ))}
              </ExerciseData>
            </ComparisonContainer>
          </Container>
        ))}
      </WorkoutContainer>
    </HistoryContainer>
   ));

  return <MainContainer>{historyWorkout}</MainContainer>;
};
const mapStateToProps = (state) => ({
  allTrainingsHistory: selectHistoryTrainingItem(state),
});
export default connect(mapStateToProps)(History);
