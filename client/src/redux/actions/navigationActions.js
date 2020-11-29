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
