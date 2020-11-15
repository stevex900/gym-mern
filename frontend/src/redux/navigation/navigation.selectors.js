import { createSelector } from "reselect";
export const selectMenu = (state) => state.menu;
export const selectMenuItem = createSelector(
  [selectMenu],
  (menu) => menu.showMenu
);
