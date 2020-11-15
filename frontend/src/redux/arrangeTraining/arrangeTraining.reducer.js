import { ActionTypes } from "./arrangeTraining.types";
const INITIAL_STATE = {
  number: 8,
  currentWorkout: [
    // {
    //   id: 1,
    //   exerciseName: "Klata",
    //   exercise: [
    //     {
    //       series: 1,
    //       repetitions: 11,
    //       weight: 150,
    //     },
    //     {
    //       series: 2,
    //       repetitions: 14,
    //       weight: 120,
    //     },
    //   ],
    // },
  ],
};

export const arrangeTrainingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_EXERCISE_ACTION:
      return {
        ...state,
        currentWorkout: [...state.currentWorkout, action.payload],
      };
    case ActionTypes.FINISH_EXERCISE_ACTION:
      return {
        ...state,
        currentWorkout: action.payload,
      };
    case ActionTypes.SET_TRAINING_ACTION:
      return { ...state };
    case ActionTypes.NUMBER_CHANGE:
      return {
        ...state,
        number: action.payload,
      };
    default:
      return state;
  }
};
//number: action.payload,
export default arrangeTrainingReducer;
