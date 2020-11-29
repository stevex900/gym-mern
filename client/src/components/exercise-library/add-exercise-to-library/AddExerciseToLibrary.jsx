import React from "react";

import { bodyParts } from "../check-exercise-library/CheckExerciseLibrary";
import {
  MainContainer,
  BodyPartContainer,
  Container,
  PrimaryContainer,
} from "../check-exercise-library/checkExerciseLibrary.styles";
const AddExerciseToLibrary = () => {
  return (
    <MainContainer>
      <PrimaryContainer>Add Exercise To Library</PrimaryContainer>
      <Container>
        {bodyParts.map(({ id, name }) => (
          <BodyPartContainer key={id}>{name}</BodyPartContainer>
        ))}
      </Container>
    </MainContainer>
  );
};

export default AddExerciseToLibrary;
