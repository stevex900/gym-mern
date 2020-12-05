import { ActionTypes } from "../constants/navigationConstants";
const INITIAL_STATE = {
  showMenu: false,
  showExercisesLibrary: false,
  showAddExerciseToLibrary: false,
  showChest: false,
  showBack: false,
  showLegs: false,
  showShoulders: false,
  showBiceps: false,
  showTriceps: false,
  showAbdomen: false,
  showOther: false,
  inputExerciseName: "",
};

export const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_OR_HIDE_MENU:
      return { ...state, showMenu: action.payload };
    case ActionTypes.SHOW_OR_HIDE_EXERCISES_LIBRARY:
      return {
        ...state,
        showExercisesLibrary: action.payload,
        showAddExerciseToLibrary: false,
        showChest: false,
        showBack: false,
        showLegs: false,
        showShoulders: false,
        showBiceps: false,
        showTriceps: false,
        showAbdomen: false,
        showOther: false,
      };
    case ActionTypes.SHOW_OR_HIDE_ADD_EXERCISE_TO_LIBRARY:
      return {
        ...state,
        showAddExerciseToLibrary: action.payload,
        showExercisesLibrary: false,
        showChest: false,
        showBack: false,
        showLegs: false,
        showShoulders: false,
        showBiceps: false,
        showTriceps: false,
        showAbdomen: false,
        showOther: false,
      };
    case ActionTypes.SHOW_OR_HIDE_BODY_PART:
      if (action.payload[1] === "chest") {
        return { ...state, showChest: action.payload[0] };
      } else if (action.payload[1] === "back") {
        return { ...state, showBack: action.payload[0] };
      } else if (action.payload[1] === "legs") {
        return { ...state, showLegs: action.payload[0] };
      } else if (action.payload[1] === "shoulders") {
        return { ...state, showShoulders: action.payload[0] };
      } else if (action.payload[1] === "biceps") {
        return { ...state, showBiceps: action.payload[0] };
      } else if (action.payload[1] === "triceps") {
        return { ...state, showTriceps: action.payload[0] };
      } else if (action.payload[1] === "abdomen") {
        return { ...state, showAbdomen: action.payload[0] };
      } else if (action.payload[1] === "other") {
        return { ...state, showOther: action.payload[0] };
      }
    case ActionTypes.EXERCISE_INPUT_CHANGE:
      return { ...state, inputExerciseName: action.payload };
    case ActionTypes.ADD_TO_EXERCISE_INPUT:
      return { ...state, inputExerciseName: action.payload };
    default:
      return state;
  }
};

export default menuReducer;
