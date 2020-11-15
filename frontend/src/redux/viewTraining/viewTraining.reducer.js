import { ActionTypes } from "../arrangeTraining/arrangeTraining.types";
import { ViewActionTypes } from "./viewTraining.types";
const INITIAL_STATE = {
  number: 8,
  viewCurrentWorkout: [
    // {
    //   id: 1,
    //   exerciseName: "Klata",
    //   exercise: [
    //     {
    //       series: 1,
    //       repetitions: 2,
    //       weight: 9,
    //       myRepetitions: null,
    //       myWeight: null,
    //     },
    //     {
    //       series: 2,
    //       repetitions: 5,
    //       weight: 3,
    //       myRepetitions: null,
    //       myWeight: null,
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   exerciseName: "Plecy",
    //   exercise: [
    //     {
    //       series: 1,
    //       repetitions: 12,
    //       weight: 112,
    //       myRepetitions: null,
    //       myWeight: null,
    //     },
    //     {
    //       series: 2,
    //       repetitions: 14,
    //       weight: 120,
    //       myRepetitions: null,
    //       myWeight: null,
    //     },
    //   ],
    // },
  ],
};

export const viewTrainingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_TRAINING_ACTION:
      return {
        ...state,
        viewCurrentWorkout: action.payload,
      };
    case ViewActionTypes.PUT_MY_SCORE:
      return {
        ...state,
        viewCurrentWorkout: action.payload,
      };
    default:
      return state;
  }
};

export default viewTrainingReducer;
