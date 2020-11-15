import { ActionTypes } from "./stopwatch.types";
export const showStopwatchChangeAction = (item) => ({
  type: ActionTypes.SHOW_OR_HIDE_STOPWATCH,
  payload: item,
});
export const seriesChangeValueAction = (item) => ({
  type: ActionTypes.SERIES_SECONDS_CHANGE,
  payload: item,
});
export const workoutChangeValueAction = (item) => ({
  type: ActionTypes.WORKOUT_SECONDS_CHANGE,
  payload: item,
});
export const restChangeValueAction = (item) => ({
  type: ActionTypes.REST_SECONDS_CHANGE,
  payload: item,
});

export const seriesChangeValueActionMinutes = (item) => ({
  type: ActionTypes.SERIES_MINUTES_CHANGE,
  payload: item,
});
export const workoutChangeValueActionMinutes = (item) => ({
  type: ActionTypes.WORKOUT_MINUTES_CHANGE,
  payload: item,
});
export const restChangeValueActionMinutes = (item) => ({
  type: ActionTypes.REST_MINUTES_CHANGE,
  payload: item,
});
