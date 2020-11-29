import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { arrangeTrainingReducer } from "./reducers/arrangeTrainingReducers";

import { menuReducer } from "./reducers/navigationReducers";
import { stopwatchReducer } from "./reducers/stopwatchReducers";
import {
  userSigninReducer,
  userRegisterReducer,
} from "./reducers/userReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const middlewares = [logger, thunk];
const reducer = combineReducers({
  menu: menuReducer,
  arrangeTraining: arrangeTrainingReducer,
  stopwatch: stopwatchReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(...middlewares))
);

export default store;
