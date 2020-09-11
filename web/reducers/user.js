import Store from '../store/user';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  VERIFY_AUTH_REQUEST,
  VERIFY_AUTH_SUCCESS,
  VERIFY_AUTH_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../constants/types';
export const initialState = Store;

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
        isAuthenticated: false,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        fetching: false,
        token: action.token,
        error: null,
        isAuthenticated: true,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        error: action.message,
        fetching: false,
        isAuthenticated: false,
        data: {},
        token: null,
      });

    case VERIFY_AUTH_REQUEST:
      return Object.assign({}, state, {
        verifyingAuth: true,
        isAuthenticated: false,
      });
    case VERIFY_AUTH_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        verifyingAuth: false,
        error: null,
        isAuthenticated: true,
      });
    case VERIFY_AUTH_FAILURE:
      return Object.assign({}, state, {
        error: action.message,
        verifyingAuth: false,
        isAuthenticated: false,
        data: {},
        token: null,
      });

    case LOGOUT_USER_REQUEST:
      return Object.assign({}, state, {
        loggingOut: false,
      });
    case LOGOUT_USER_SUCCESS:
      return Object.assign({}, state, {
        data: {},
        token: null,
        isAuthenticated: false,
        loggingOut: true,
      });

    case SIGNUP_REQUEST:
      return Object.assign({}, state, {
        singupRequest: true,
        signupSuccess: false,
        signupError: null,
      });
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        singupRequest: false,
        signupSuccess: true,
        signupError: null,
      });
    case SIGNUP_FAILURE:
      return Object.assign({}, state, {
        singupRequest: false,
        signupSuccess: false,
        signupError: action.message,
      });

    default:
      return state;
  }
}