import { ActionTypes } from "../constants/stopwatchConstants";
const INITIAL_STATE = {
  stopwatchActive: false,
  seriesMinutes: 0,
  workoutMinutes: 1,
  restMinutes: 3,
  seriesSeconds: 0,
  workoutSeconds: 56,
  restSeconds: 57,
};

export const stopwatchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_OR_HIDE_STOPWATCH:
      return { ...state, stopwatchActive: action.payload };
    case ActionTypes.SERIES_SECONDS_CHANGE:
      return { ...state, seriesSeconds: action.payload };
    case ActionTypes.WORKOUT_SECONDS_CHANGE:
      return { ...state, workoutSeconds: action.payload };
    case ActionTypes.REST_SECONDS_CHANGE:
      return { ...state, restSeconds: action.payload };
    case ActionTypes.SERIES_MINUTES_CHANGE:
      return { ...state, seriesMinutes: action.payload };
    case ActionTypes.WORKOUT_MINUTES_CHANGE:
      return { ...state, workoutMinutes: action.payload };
    case ActionTypes.REST_MINUTES_CHANGE:
      return { ...state, restMinutes: action.payload };
    default:
      return state;
  }
};

export default stopwatchReducer;
