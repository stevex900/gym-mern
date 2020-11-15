import { createSelector } from "reselect";
export const selectArrangeTraining = (state) => state.arrangeTraining;

export const selectArrangeTrainingCurrentWorkout = createSelector(
  [selectArrangeTraining],
  (arrangeTraining) => arrangeTraining.currentWorkout
);

export const selectArrangeTrainingNumber = createSelector(
  [selectArrangeTraining],
  (arrangeTraining) => arrangeTraining.number
);
