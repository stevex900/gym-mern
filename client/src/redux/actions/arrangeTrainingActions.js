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
export const numberChange = (item) => ({
  type: ActionTypes.NUMBER_CHANGE,
  payload: item,
});