import React from "react";
import {
  MainContainer,
  BodyPartContainer,
  Container,
  PrimaryContainer,
} from "./checkExerciseLibrary.styles";
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
  const handleShowPartExercises = () => {};

  return (
    <MainContainer>
      <PrimaryContainer>Exercises Library</PrimaryContainer>
      <Container>
        {bodyParts.map(({ id, name }) => (
          <BodyPartContainer key={id} onClick={handleShowPartExercises}>
            {name}
          </BodyPartContainer>
        ))}
      </Container>
    </MainContainer>
  );
};

export default CheckExerciseLibrary;
