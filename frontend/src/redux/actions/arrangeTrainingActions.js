import { ActionTypes } from "../constants/arrangeTrainingConstants";
export const setExerciseAction = (item) => ({
  type: ActionTypes.SET_EXERCISE_ACTION,
  payload: item,
});
export const finishExerciseAction = (item) => ({
  type: ActionTypes.FINISH_EXERCISE_ACTION,
  payload: item,
});
export const setTrainingAction = (item) => ({
  type: ActionTypes.SET_TRAINING_ACTION,
  payload: item,
});
export const numberChange = (item) => ({
  type: ActionTypes.NUMBER_CHANGE,
  payload: item,
});
