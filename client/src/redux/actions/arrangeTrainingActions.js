import { ActionTypes } from "../constants/arrangeTrainingConstants";
import Axios from "axios";
export const setExerciseAction = (item) => ({
  type: ActionTypes.SET_EXERCISE_ACTION,
  payload: item,
});
export const finishExerciseAction = (item) => ({
  type: ActionTypes.FINISH_EXERCISE_ACTION,
  payload: item,
});
export const setTrainingAction = (item, id) => async (dispatch) => {
  try {
    const { data } = await Axios.put(`/arrangetraining/${id}`, {
      viewTraining: item,
      id: id,
    });
    dispatch({
      type: ActionTypes.SET_TRAINING_ACTION,
      payload: item,
    });
    console.log("Sprawdzanie axios", data);
    localStorage.setItem("viewTraining", JSON.stringify(data));
  } catch (error) {
    console.log("Nie działa");
  }
};
export const addExerciseToLibraryAction = (item, id, name) => async (
  dispatch
) => {
  try {
    const { data } = await Axios.put(`/arrangetraining/${id}`, {
      exercisesName: item,
      name: name,
      id: id,
    });
    dispatch({ type: ActionTypes.ADD_EXERCISE_TO_LIBRARY, payload: data });
    console.log("Sprawdzanie axios", data);
  } catch (e) {
    console.log("Nie działa");
  }
  // type: ActionTypes.ADD_EXERCISE_TO_LIBRARY,
  //     payload: item,
};
export const numberChange = (item) => ({
  type: ActionTypes.NUMBER_CHANGE,
  payload: item,
});
