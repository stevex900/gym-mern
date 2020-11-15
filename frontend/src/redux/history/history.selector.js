import { createSelector } from "reselect";
export const selectHistoryTraining = (state) => state.historyTraining;

export const selectHistoryTrainingItem = createSelector(
  [selectHistoryTraining],
  (historyTraining) => historyTraining.allTrainingsHistory
);

export const selectHistoryTrainingNumber = createSelector(
  [selectHistoryTraining],
  (historyTraining) => historyTraining.number
);
