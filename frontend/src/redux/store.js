import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { arrangeTrainingReducer } from "./reducers/arrangeTrainingReducers";
import { historyTrainingReducer } from "./reducers/historyReducers";
import { menuReducer } from "./reducers/navigationReducers";
import { stopwatchReducer } from "./reducers/stopwatchReducers";
import { userSigninReducer } from "./reducers/userReducers";
import { viewTrainingReducer } from "./reducers/viewTrainingReducers";

const initialState = {
  //   userSignin: {
  //     userInfo: localStorage.getItem("userInfo")
  //       ? JSON.parse(localStorage.getItem("userInfo"))
  //       : null,
  //   },
  //   cart: {
  //     cartItems: localStorage.getItem("cartItems")
  //       ? JSON.parse(localStorage.getItem("cartItems"))
  //       : [],
  //   },
};
const reducer = combineReducers({
  arrangeTraining: arrangeTrainingReducer,
  historyTraining: historyTrainingReducer,
  menu: menuReducer,
  stopwatch: stopwatchReducer,
  userSignin: userSigninReducer,
  viewTraining: viewTrainingReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

//=========================== OLD STORE ============================

// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import rootReducer from "./root-reducer";
// import thunk from "redux-thunk";

// const middlewares = [logger, thunk];
// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export default store;
