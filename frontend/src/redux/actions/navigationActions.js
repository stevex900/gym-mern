import { ActionTypes } from "../constants/navigationConstants";
export const showMenuChangeAction = (item) => ({
  type: ActionTypes.SHOW_OR_HIDE_MENU,
  payload: item,
});
