import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainContainer } from "./exerciseLibrary.styles";
import { Button, ButtonContainer, Container } from "./exerciseLibrary.styles";

import PartList from "./part-list/PartList";
import {
  showAddExerciseToLibraryChangeAction,
  showExercisesLibraryChangeAction,
} from "../../redux/actions/navigationActions";

const ExerciseLibrary = () => {
  const menu = useSelector((state) => state.menu);
  const { showExercisesLibrary, showAddExerciseToLibrary } = menu;
  const dispatch = useDispatch();

  const handleShowAddExerciseToLibrary = () => {
    dispatch(showExercisesLibraryChangeAction(!showExercisesLibrary));
  };
  const handleShowAddExerciseToLibraryChangeAction = () => {
    dispatch(showAddExerciseToLibraryChangeAction(!showAddExerciseToLibrary));
  };
  return (
    <MainContainer>
      <ButtonContainer>
        <Button onClick={handleShowAddExerciseToLibrary}>
          Exercises Library
        </Button>
        <Button onClick={handleShowAddExerciseToLibraryChangeAction}>
          Add Exercise to Library
        </Button>
      </ButtonContainer>
      <Container>
        {showExercisesLibrary && <PartList info="Exercises Library" library />}

        {showAddExerciseToLibrary && (
          <PartList info="Add Exercise to Library" add />
        )}
      </Container>
    </MainContainer>
  );
};

export default ExerciseLibrary;
