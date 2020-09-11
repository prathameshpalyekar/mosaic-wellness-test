import { SERVER } from '../lib/server';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  VERIFY_AUTH_REQUEST,
  VERIFY_AUTH_SUCCESS,
  VERIFY_AUTH_FAILURE,
} from '../web/constants/types';
import * as TYPES from '../web/constants/types';
import { AUTHORISE_WITH_TOKEN } from '../lib/server';

export const loginUser = (data, redirect) => {
  return (dispatch) => {
    dispatch({type: LOGIN_REQUEST});
    return SERVER
      .post('organization/user/login', data)
      .then((xhrResponse) => {
        const response = xhrResponse.data;
        if (response.error) {
          const message = response.message || 'Failed to login';
          dispatch({type: LOGIN_FAILURE, message});
          return;
        }
        const { token, user } = response.data;
        dispatch({type: LOGIN_SUCCESS, data: user, token});
        AUTHORISE_WITH_TOKEN(token);
        const { location } = window;
        location.reload();
        redirect && location.assign(redirect);
      }).catch((xhrResponse) => {
        const response = xhrResponse.data || {};
        const message = (response && response.message) || 'Failed to login';
        dispatch({type: LOGIN_FAILURE, message});
      });
  }
}

export const signupUser = (data) => {
  return (dispatch) => {
    dispatch({type: TYPES.SIGNUP_REQUEST});
    return SERVER
      .post('organization/user/signup', data)
      .then((xhrResponse) => {
        const response = xhrResponse.data;
        if (response.error) {
          const message = response.message || 'Failed to signup';
          dispatch({type: TYPES.SIGNUP_FAILURE, message});
          return;
        }
        dispatch({type: TYPES.SIGNUP_SUCCESS});
      }).catch((xhrResponse) => {
        const response = xhrResponse.data || {};
        const message = (response && response.message) || 'Failed to signup';
        dispatch({type: TYPES.SIGNUP_FAILURE, message});
      });
  }
}

export const isUserAuthenticated = (token) => {
  return (dispatch) => {
    dispatch({type: VERIFY_AUTH_REQUEST});
    return SERVER
      .get('organization/user/get-user')
      .then((xhrResponse) => {
        const response = xhrResponse.data;
        if (response.error) {
          const message = response.message || 'Failed to login';
          dispatch({type: VERIFY_AUTH_FAILURE, message});
          return;
        }
        const { data } = response;
        dispatch({type: VERIFY_AUTH_SUCCESS, data});
      }).catch((xhrResponse) => {
        const response = xhrResponse.data || {};
        const message = (response && response.message) || 'Failed to login';
        dispatch({type: VERIFY_AUTH_FAILURE, message});
      });
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({type: TYPES.LOGOUT_USER_REQUEST});
    dispatch({type: TYPES.LOGOUT_USER_SUCCESS});
  }
}
