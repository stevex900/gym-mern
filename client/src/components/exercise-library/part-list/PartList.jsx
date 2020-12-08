import React from "react";
import AddExerciseToLibrary from "./add-exercise-to-library/AddExerciseToLibrary";
import CheckExerciseLibrary from "./check-exercise-library/CheckExerciseLibrary";
import {
  MainContainer,
  BodyPartContainer,
  Container,
  PrimaryContainer,
  DetailsContainer,
} from "./partList.styles";
import { useDispatch, useSelector } from "react-redux";
import { showBodyPartsAction } from "../../../redux/actions/navigationActions";
export const bodyParts = [
  { id: 1, name: "Chest" },
  { id: 2, name: "Back" },
  { id: 3, name: "Legs" },
  { id: 4, name: "Shoulders" },
  { id: 5, name: "Biceps" },
  { id: 6, name: "Triceps" },
  { id: 7, name: "Abdomen" },
  { id: 8, name: "Other" },
];
const PartList = ({ info, library, add }) => {
  const userSignin = useSelector((state) => state.userSignin);
  const {
    userInfo: { exercisesName },
  } = userSignin;
  const menu = useSelector((state) => state.menu);
  const {
    showChest,
    showBack,
    showLegs,
    showShoulders,
    showBiceps,
    showTriceps,
    showAbdomen,
    showOther,
  } = menu;
  const dispatch = useDispatch();

  const body = [
    {
      id: 1,
      name: "Chest",
      active: showChest,
      exercisesName: exercisesName.chest,
    },
    {
      id: 2,
      name: "Back",
      active: showBack,
      exercisesName: exercisesName.back,
    },
    {
      id: 3,
      name: "Legs",
      active: showLegs,
      exercisesName: exercisesName.legs,
    },
    {
      id: 4,
      name: "Shoulders",
      active: showShoulders,
      exercisesName: exercisesName.shoulders,
    },
    {
      id: 5,
      name: "Biceps",
      active: showBiceps,
      exercisesName: exercisesName.biceps,
    },
    {
      id: 6,
      name: "Triceps",
      active: showTriceps,
      exercisesName: exercisesName.triceps,
    },
    {
      id: 7,
      name: "Abdomen",
      active: showAbdomen,
      exercisesName: exercisesName.abdomen,
    },
    {
      id: 8,
      name: "Other",
      active: showOther,
      exercisesName: exercisesName.other,
    },
  ];
  const handleShowPartExercises = (bindValue) => {
    if (bindValue === "chest") {
      dispatch(showBodyPartsAction(!showChest, bindValue));
    } else if (bindValue === "back") {
      dispatch(showBodyPartsAction(!showBack, bindValue));
    } else if (bindValue === "legs") {
      dispatch(showBodyPartsAction(!showLegs, bindValue));
    } else if (bindValue === "shoulders") {
      dispatch(showBodyPartsAction(!showShoulders, bindValue));
    } else if (bindValue === "biceps") {
      dispatch(showBodyPartsAction(!showBiceps, bindValue));
    } else if (bindValue === "triceps") {
      dispatch(showBodyPartsAction(!showTriceps, bindValue));
    } else if (bindValue === "abdomen") {
      dispatch(showBodyPartsAction(!showAbdomen, bindValue));
    } else if (bindValue === "other") {
      dispatch(showBodyPartsAction(!showOther, bindValue));
    }
  };

  return (
    <MainContainer>
      <PrimaryContainer>{info}</PrimaryContainer>
      <Container>
        {body.map(({ id, name, active, exercisesName }) => (
          <BodyPartContainer key={id}>
            <div
              onClick={handleShowPartExercises.bind(
                this,
                name.toLocaleLowerCase()
              )}
            >
              {name}
            </div>
            {active && library && (
              <DetailsContainer>
                <CheckExerciseLibrary exercisesName={exercisesName} />
              </DetailsContainer>
            )}
            {active && add && (
              <DetailsContainer>
                <AddExerciseToLibrary name={name} />
              </DetailsContainer>
            )}
          </BodyPartContainer>
        ))}
      </Container>
    </MainContainer>
  );
};

export default PartList;
