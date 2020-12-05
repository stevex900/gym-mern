import { ActionTypes } from "../constants/navigationConstants";
export const showMenuChangeAction = (item) => ({
  type: ActionTypes.SHOW_OR_HIDE_MENU,
  payload: item,
});
export const showExercisesLibraryChangeAction = (item) => async (dispatch) => {
  dispatch({
    type: ActionTypes.SHOW_OR_HIDE_EXERCISES_LIBRARY,
    payload: item,
  });
};

export const showAddExerciseToLibraryChangeAction = (item) => async (
  dispatch
) => {
  dispatch({
    type: ActionTypes.SHOW_OR_HIDE_ADD_EXERCISE_TO_LIBRARY,
    payload: item,
  });
};

export const showBodyPartsAction = (item, part) => async (dispatch) => {
  dispatch({
    type: ActionTypes.SHOW_OR_HIDE_BODY_PART,
    payload: [item, part],
  });
};
export const addToExerciseInput = (item) => async (dispatch) => {
  dispatch({ type: ActionTypes.ADD_TO_EXERCISE_INPUT, payload: item });
};
export const exerciseInputChange = (item) => async (dispatch) => {
  dispatch({ type: ActionTypes.EXERCISE_INPUT_CHANGE, payload: item });
};
