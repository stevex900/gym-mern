import { createSelector } from "reselect";
export const selectViewTraining = (state) => state.viewTraining;

export const selectViewTrainingCurrentWorkout = createSelector(
  [selectViewTraining],
  (viewTraining) => viewTraining.viewCurrentWorkout
);
