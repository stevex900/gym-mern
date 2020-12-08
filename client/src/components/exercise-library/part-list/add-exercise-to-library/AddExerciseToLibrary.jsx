import React, { useState } from "react";
import { Input, Button, Container } from "./addExerciseToLibrary.styles";
import { useSelector, useDispatch } from "react-redux";
import { addExerciseToLibraryAction } from "../../../../redux/actions/arrangeTrainingActions";
const AddExerciseToLibrary = ({ name }) => {
  const userSignin = useSelector((state) => state.userSignin);
  const dispatch = useDispatch();
  const [inputChange, setInputChange] = useState();
  const handleChange = (e) => {
    setInputChange(e.target.value);
  };
  const handleAddNewExerciseName = (nameForBackend) => {
    dispatch(
      addExerciseToLibraryAction(
        inputChange,
        userSignin.userInfo._id,
        nameForBackend
      )
    );
    console.log(inputChange, userSignin.userInfo._id, nameForBackend);
  };
  return (
    <Container>
      <Input
        onChange={handleChange}
        type="text"
        placeholder="Add Exercise Name to Library"
      />
      <Button onClick={() => handleAddNewExerciseName(name.toLowerCase())}>
        Add
      </Button>
    </Container>
  );
};

export default AddExerciseToLibrary;
