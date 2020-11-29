import { ActionTypes } from "../constants/navigationConstants";
const INITIAL_STATE = {
  showMenu: false,
  showExercisesLibrary: true,
  showAddExerciseToLibrary: false,
};

export const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_OR_HIDE_MENU:
      return { ...state, showMenu: action.payload };
    case ActionTypes.SHOW_OR_HIDE_EXERCISES_LIBRARY:
      return { ...state, showExercisesLibrary: action.payload };
    case ActionTypes.SHOW_OR_HIDE_ADD_EXERCISE_TO_LIBRARY:
      return { ...state, showAddExerciseToLibrary: action.payload };
    default:
      return state;
  }
};

export default menuReducer;
