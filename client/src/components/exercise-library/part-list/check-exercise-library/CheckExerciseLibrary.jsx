import React from "react";
import { Container } from "./checkExerciseLibrary.styles";
import { useDispatch, useSelector } from "react-redux";
import { addToExerciseInput } from "../../../../redux/actions/navigationActions";
const CheckExerciseLibrary = ({ exercisesName }) => {
  const dispatch = useDispatch();
  const handleAddToExerciseInput = (item) => {
    dispatch(addToExerciseInput(item));
  };
  return (
    <Container>
      {exercisesName.map((item) => (
        <div key={item} onClick={() => handleAddToExerciseInput(item)}>
          {item}
        </div>
      ))}
    </Container>
  );
};

export default CheckExerciseLibrary;
