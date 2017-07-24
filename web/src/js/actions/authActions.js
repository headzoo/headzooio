'use strict';

import * as types from 'actions/actionTypes';
import Auth from 'api/Auth';

/**
 * 
 * @param {{username: string, password: string}} creds
 * @returns {Function}
 */
export function login(creds) {
  return function (dispatch) {
    dispatch(loginBegin());
    
    return Auth.login(creds)
      .then(resp => {
        dispatch(loginComplete(resp));
      })
      .catch(error => {
        dispatch(loginError(error))
      });
  }
}

/**
 *
 * @returns {{type: LOGIN_BEGIN, creds: *, isFetching: boolean, isAuthenticated: boolean}}
 */
export function loginBegin() {
  return {
    type:            types.LOGIN_BEGIN,
    isFetching:      true,
    isAuthenticated: false
  }
}

/**
 * 
 * @param {{token: string}} resp
 * @returns {{type: LOGIN_COMPLETE, token: *, isFetching: boolean, isAuthenticated: boolean}}
 */
export function loginComplete(resp) {
  return {
    type:            types.LOGIN_COMPLETE,
    token:           resp.token,
    isFetching:      false,
    isAuthenticated: true
  }
}

/**
 * 
 * @param {string} message
 * @returns {{type: LOGIN_FAILURE, message: *, isFetching: boolean, isAuthenticated: boolean}}
 */
export function loginError(message) {
  return {
    type:            types.LOGIN_FAILURE,
    message:         message,
    isFetching:      false,
    isAuthenticated: false
  }
}

/**
 * 
 * @returns {Function}
 */
export function logout() {
  return dispatch => {
    dispatch(logoutBegin());
    Auth.logout();
    dispatch(logoutComplete());
  }
}

/**
 * 
 * @returns {{type: LOGOUT_BEGIN, isFetching: boolean, isAuthenticated: boolean}}
 */
export function logoutBegin() {
  return {
    type:            types.LOGOUT_BEGIN,
    isFetching:      true,
    isAuthenticated: true
  }
}

/**
 * 
 * @returns {{type: LOGOUT_COMPLETE, isFetching: boolean, isAuthenticated: boolean}}
 */
export function logoutComplete() {
  return {
    type:            types.LOGOUT_COMPLETE,
    isFetching:      false,
    isAuthenticated: false
  }
}
