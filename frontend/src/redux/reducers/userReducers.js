import { ActionTypes } from "../constants/arrangeTrainingConstants";
import { ViewActionTypes } from "../constants/viewTrainingConstants";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    case ActionTypes.SET_TRAINING_ACTION:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          viewTraining: { viewCurrentWorkout: action.payload },
        },
      };
    case ViewActionTypes.PUT_MY_SCORE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          viewTraining: { viewCurrentWorkout: action.payload },
        },
      };
    default:
      return state;
  }
};
