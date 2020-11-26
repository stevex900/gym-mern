import React from "react";
import { MainContainer } from "./history.styles";
import { useSelector } from "react-redux";

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

const History = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const {
    userInfo: {
      historyTraining: { allTrainingsHistory },
    },
  } = userSignin;

  // const historyTraining = useSelector((state) => state.historyTraining);
  // const { allTrainingsHistory } = historyTraining;
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

  return (
    <MainContainer>
      {historyWorkout}
      <button onClick={() => console.log(historyList)}>TEST</button>
    </MainContainer>
  );
};

export default History;
