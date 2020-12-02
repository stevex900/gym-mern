import React from "react";
import {
  MainContainer,
  BodyPartContainer,
  Container,
  PrimaryContainer,
  DetailsContainer,
} from "./checkExerciseLibrary.styles";
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
const CheckExerciseLibrary = () => {
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
    { id: 1, name: "Chest", active: showChest },
    { id: 2, name: "Back", active: showBack },
    { id: 3, name: "Legs", active: showLegs },
    { id: 4, name: "Shoulders", active: showShoulders },
    { id: 5, name: "Biceps", active: showBiceps },
    { id: 6, name: "Triceps", active: showTriceps },
    { id: 7, name: "Abdomen", active: showAbdomen },
    { id: 8, name: "Other", active: showOther },
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
    console.log(bindValue);
  };

  return (
    <MainContainer>
      <PrimaryContainer>Exercises Library</PrimaryContainer>
      <Container>
        {body.map(({ id, name, active }) => (
          <BodyPartContainer
            key={id}
            onClick={handleShowPartExercises.bind(
              this,
              name.toLocaleLowerCase()
            )}
          >
            {name}
            {active && <DetailsContainer>details</DetailsContainer>}
          </BodyPartContainer>
        ))}
      </Container>
    </MainContainer>
  );
};

export default CheckExerciseLibrary;
