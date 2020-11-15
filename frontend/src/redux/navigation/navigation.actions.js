import { ActionTypes } from "./navigation.types";
export const showMenuChangeAction = (item) => ({
  type: ActionTypes.SHOW_OR_HIDE_MENU,
  payload: item,
});
