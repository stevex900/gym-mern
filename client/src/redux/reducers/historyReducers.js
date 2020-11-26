import { ViewActionTypes } from "../constants/viewTrainingConstants";
const INITIAL_STATE = {
  number: 8,
  allTrainingsHistory: [
    // {
    //   id: 1,
    //   date: "21-05-2020",
    //   history: [
    //     {
    //       id: 1,
    //       exerciseName: "Klata",
    //       exercise: [
    //         {
    //           series: 1,
    //           repetitions: 2,
    //           weight: 9,
    //           myRepetitions: null,
    //           myWeight: null,
    //         },
    //         {
    //           series: 2,
    //           repetitions: 5,
    //           weight: 3,
    //           myRepetitions: null,
    //           myWeight: null,
    //         },
    //       ],
    //     },
    //     {
    //       id: 2,
    //       exerciseName: "Biceps",
    //       exercise: [
    //         {
    //           series: 1,
    //           repetitions: 12,
    //           weight: 112,
    //           myRepetitions: null,
    //           myWeight: null,
    //         },
    //         {
    //           series: 2,
    //           repetitions: 14,
    //           weight: 120,
    //           myRepetitions: null,
    //           myWeight: null,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   date: "25-05-2020",
    //   history: [
    //     {
    //       id: 1,
    //       exerciseName: "Plecy",
    //       exercise: [
    //         {
    //           series: 1,
    //           repetitions: 2,
    //           weight: 9,
    //           myRepetitions: null,
    //           myWeight: null,
    //         },
    //         {
    //           series: 2,
    //           repetitions: 5,
    //           weight: 3,
    //           myRepetitions: null,
    //           myWeight: null,
    //         },
    //       ],
    //     },
    //     {
    //       id: 2,
    //       exerciseName: "Triceps",
    //       exercise: [
    //         {
    //           series: 1,
    //           repetitions: 12,
    //           weight: 112,
    //           myRepetitions: null,
    //           myWeight: null,
    //         },
    //         {
    //           series: 2,
    //           repetitions: 14,
    //           weight: 120,
    //           myRepetitions: null,
    //           myWeight: null,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export const historyTrainingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ViewActionTypes.FINISH_TRAINING:
      return {
        ...state,
        allTrainingsHistory: [...state.allTrainingsHistory, action.payload],
      };
    default:
      return state;
  }
};
export default historyTrainingReducer;
