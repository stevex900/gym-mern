import { createSelector } from "reselect";
export const selectStopwatch = (state) => state.stopwatch;
export const selectStopwatchItem = createSelector(
  [selectStopwatch],
  (stopwatch) => stopwatch.stopwatchActive
);
export const selectStopwatchSeries = createSelector(
  [selectStopwatch],
  (stopwatch) => stopwatch.seriesSeconds
);
export const selectStopwatchWorkout = createSelector(
  [selectStopwatch],
  (stopwatch) => stopwatch.workoutSeconds
);
export const selectStopwatchRest = createSelector(
  [selectStopwatch],
  (stopwatch) => stopwatch.restSeconds
);

export const selectStopwatchSeriesMinutes = createSelector(
  [selectStopwatch],
  (stopwatch) => stopwatch.seriesMinutes
);
export const selectStopwatchWorkoutMinutes = createSelector(
  [selectStopwatch],
  (stopwatch) => stopwatch.workoutMinutes
);
export const selectStopwatchRestMinutes = createSelector(
  [selectStopwatch],
  (stopwatch) => stopwatch.restMinutes
);
