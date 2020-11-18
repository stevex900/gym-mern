import { ViewActionTypes } from "../constants/viewTrainingConstants";
export const numberChange = (item) => ({
  type: ViewActionTypes.FINISH_TRAINING_ACTION,
  payload: item,
});
export const myScoreConfirmAction = (item) => ({
  type: ViewActionTypes.PUT_MY_SCORE,
  payload: item,
});
export const finishTrainingAction = (item) => ({
  type: ViewActionTypes.FINISH_TRAINING,
  payload: item,
});
