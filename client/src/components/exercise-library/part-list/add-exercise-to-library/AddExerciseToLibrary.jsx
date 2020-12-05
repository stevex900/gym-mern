import React from "react";
import { Input, Button, Container } from "./addExerciseToLibrary.styles";
const AddExerciseToLibrary = () => {
  return (
    <Container>
      <Input type="text" placeholder="Add Exercise Name to Library" />
      <Button>Add</Button>
    </Container>
  );
};

export default AddExerciseToLibrary;
