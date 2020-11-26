import { ActionTypes } from "../constants/navigationConstants";
const INITIAL_STATE = {
  showMenu: false,
};

export const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_OR_HIDE_MENU:
      return { ...state, showMenu: action.payload };
    default:
      return state;
  }
};

export default menuReducer;
