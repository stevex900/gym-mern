import React, { useState } from "react";
import { connect } from "react-redux";
import {
  myScoreConfirmAction,
  finishTrainingAction,
} from "../../redux/viewTraining/viewTraining.actions";
import { selectViewTrainingCurrentWorkout } from "../../redux/viewTraining/viewTraining.selector";
import {
  MainContainer,
  PrimaryContainer,
  SecondaryContainer,
  TertiaryContainer,
  QuinaryContainer,
  ExerciseDataMyRep,
  ExerciseDataMyWeight,
  Button,
  SmallButton,
  ButtonContainer,
  ExerciseName,
  P,
  Input,
  ExerciseData,
  ExerciseDataItemContainer,
  ExerciseDataItem,
} from "./viewTraining.styles";
import { finishExerciseAction } from "../../redux/arrangeTraining/arrangeTraining.actions";
const ViewTraining = ({
  viewCurrentWorkout,
  number,
  myScoreConfirmAction,
  finishTrainingAction,
  finishExerciseAction,
}) => {
  // const [myScoreInputRepetitions, setMyScoreInputRepetitions] = useState([{name:'', value:""}]);
  // const [myScoreInputWeight, setMyScoreInputWeight] = useState([{name:'', value:""}]);
  const [myScoreInputRepetitions, setMyScoreInputRepetitions] = useState("");
  const [myScoreInputWeight, setMyScoreInputWeight] = useState("");
  const [myScoreInputSeries, setMyScoreInputSeries] = useState("");

  const handleInputChange = (bindValue, e) => {
    if (bindValue === "repetitions") {
      setMyScoreInputRepetitions(e.target.value);
    } else if (bindValue === "weight") {
      setMyScoreInputWeight(e.target.value);
    }

    // const inputName = e.target.getAttribute("name")
    // if(bindValue === inputName &&bindValue.indexOf('repetitions')!==-1 ){
    //   setMyScoreInputRepetitions([{name:inputName, value:e.target.value}]);
    // }else if (bindValue === inputName && bindValue.indexOf("weight")!==-1) {
    //   setMyScoreInputWeight([{name:inputName, value:e.target.value}]);
    // }
  };

  const color = (rep, weight, myRep, myWeight) => {
    if (rep > myRep || weight > myWeight) {
      return "red";
    } else {
      return "green";
    }
  };

  let viewCurrentWorkouts = [...viewCurrentWorkout];

  const handleMyScore = (id, exerciseName, series) => {
    let remainedSeries = viewCurrentWorkouts
      .filter((item) => item.id === id)
      .map((item) => item.exercise.filter((item) => item.series !== series));

    let deletedSeries = viewCurrentWorkouts
      .filter((item) => item.id === id)
      .map((item) => item.exercise.filter((item) => item.series === series));

    let updatedDeletedSeries = {
      series: deletedSeries[0][0].series,
      repetitions: deletedSeries[0][0].repetitions,
      weight: deletedSeries[0][0].weight,
      myRepetitions: myScoreInputRepetitions,
      myWeight: myScoreInputWeight,
      // myRepetitions: myScoreInputRepetitions[0].value,
      // myWeight: myScoreInputWeight[0].value,
    };

    let remainedExercise = viewCurrentWorkouts.filter((item) => item.id !== id);
    let combineSeries = [...remainedSeries[0], updatedDeletedSeries];

    const myDoneScore = [
      {
        id: id,
        exerciseName: exerciseName,
        exercise: combineSeries,
      },
    ];
    const newWorkout = [...myDoneScore, ...remainedExercise];

    myScoreConfirmAction(newWorkout);
    setMyScoreInputRepetitions("");
    setMyScoreInputWeight("");
    // setMyScoreInputRepetitions([{name:'', value:''}]);
    // setMyScoreInputWeight([{name:'', value:''}]);

    console.log("repetitions-after", myScoreInputRepetitions);
    console.log("weight-after", myScoreInputWeight);
  };

  const handleFinished = () => {
    const time = new Date().toLocaleDateString();

    const currentTime = time;

    const updateHistory = {
      id: 3,
      date: currentTime,
      history: viewCurrentWorkouts,
    };

    const viewCurrentWorkout = [];

    finishTrainingAction(updateHistory);
    myScoreConfirmAction(viewCurrentWorkout);
    finishExerciseAction(viewCurrentWorkout);
    alert(
      "Training has been finished. The workout creator and the current workout have been reset. Training saved in the archive"
    );
  };

  const viewCurrentWorkoutsList = viewCurrentWorkouts
    .sort((a, b) => a.id - b.id)
    .map((workout) => (
      <TertiaryContainer key={workout.id}>
        <ExerciseName> {workout.exerciseName}</ExerciseName>
        <ExerciseData>
          {workout.exercise
            .sort((a, b) => a.series - b.series)
            .map((item) => (
              <ExerciseDataItemContainer key={item.series}>
                <ExerciseDataItem>
                  {`${item.repetitions && item.repetitions + "x"}`}
                </ExerciseDataItem>
                <ExerciseDataItem>
                  {`${item.weight && item.weight + "kg"}`}{" "}
                  {/* <Input
                name={ workout.id.toString()+ item.series.toString()+ "repetitions" }
                onChange={handleInputChange.bind( this , workout.id.toString()+ item.series.toString()+ "repetitions" )} 
                type="number"
                placeholder="My x"
                value={myScoreInputRepetitions[0].value}
              />
              <Input
                 name={ workout.id.toString()+ item.series.toString()+ "weight" }
                onChange={handleInputChange.bind(this,workout.id.toString()+ item.series.toString()+ "weight")} 
                type="number"
                placeholder="My kg"
                value={myScoreInputWeight[0].value}
              /> */}
                </ExerciseDataItem>
                <SmallButton
                  onClick={() =>
                    handleMyScore(
                      workout.id,
                      workout.exerciseName,
                      item.series,
                      item.repetitions,
                      item.weight
                    )
                  }
                >
                  Confirm
                </SmallButton>
                {item.myRepetitions || item.myWeight ? (
                  <ExerciseDataItemContainer>
                    <ExerciseDataMyRep
                      color={color(
                        item.repetitions,
                        item.weight,
                        item.myRepetitions,
                        item.myWeight
                      )}
                    >
                      {`${item.myRepetitions && item.myRepetitions + "x"}`}
                    </ExerciseDataMyRep>
                    <ExerciseDataMyWeight
                      color={color(
                        item.repetitions,
                        item.weight,
                        item.myRepetitions,
                        item.myWeight
                      )}
                    >
                      {`${item.myWeight && item.myWeight + "kg"}`}
                    </ExerciseDataMyWeight>
                  </ExerciseDataItemContainer>
                ) : null}
              </ExerciseDataItemContainer>
            ))}
        </ExerciseData>
      </TertiaryContainer>
    ));
  return (
    <MainContainer>
      <Input
        onChange={handleInputChange.bind(this, "repetitions")}
        type="number"
        placeholder="My Repetitions (X)"
        value={myScoreInputRepetitions}
        //  value={myScoreInputRepetitions[0].value}
      />
      <Input
        onChange={handleInputChange.bind(this, "weight")}
        type="number"
        placeholder="My Burden (KG)"
        value={myScoreInputWeight}
        //  value={myScoreInputWeight[0].value}
      />
      <PrimaryContainer>{viewCurrentWorkoutsList}</PrimaryContainer>
      <ButtonContainer>
        <Button onClick={handleFinished}>Finished</Button>
      </ButtonContainer>
    </MainContainer>
  );
};
const mapStateToProps = (state) => ({
  viewCurrentWorkout: selectViewTrainingCurrentWorkout(state),
});
const mapDispatchToProps = (dispatch) => ({
  myScoreConfirmAction: (item) => dispatch(myScoreConfirmAction(item)),
  finishTrainingAction: (item) => dispatch(finishTrainingAction(item)),
  finishExerciseAction: (item) => dispatch(finishExerciseAction(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewTraining);
