import { ViewActionTypes } from "../constants/viewTrainingConstants";
import Axios from "axios";
export const numberChange = (item) => ({
  type: ViewActionTypes.FINISH_TRAINING_ACTION,
  payload: item,
});

export const myScoreConfirmAction = (item, id) => async (dispatch) => {
  dispatch({
    type: ViewActionTypes.PUT_MY_SCORE,
    payload: item,
  });
  console.log(item);
  console.log("id@@: ", id);
  try {
    const { data } = await Axios.put(`/viewtraining/${id}`, {
      viewTraining: item,
    });

    console.log("Sprawdzanie axios", data);
    localStorage.setItem("viewTraining", JSON.stringify(data));
  } catch (error) {
    console.log("Nie działa");
  }
};

export const finishTrainingAction = (item, id) => async (dispatch) => {
  try {
    const { data } = await Axios.put(`/viewtraining/${id}`, {
      historyTraining: item,
    });
    dispatch({
      type: ViewActionTypes.FINISH_TRAINING_ACTION,
      payload: item,
    });
    console.log("Sprawdzanie axios", data);
    localStorage.setItem("viewTraining", JSON.stringify(data));
  } catch (error) {
    console.log("nie działa");
  }
};
