'use strict';

import * as types from '../actions/actionTypes';
import Auth from '../api/Auth';
import initialState from './initialState';

let is = Object.assign({}, initialState.auth);
is.isAuthenticated = Auth.isAuthenticated();

export default function authReducer(state = is, action = {}) {
  
  switch(action.type) {
    case types.LOGIN_BEGIN:
      return Object.assign({}, state, {
        errorMessage:    '',
        isFetching:      true,
        isAuthenticated: false
      });
      break;
    case types.LOGIN_COMPLETE:
      return Object.assign({}, state, {
        errorMessage:    '',
        isFetching:      false,
        isAuthenticated: true
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching:      false,
        isAuthenticated: false,
        errorMessage:    action.message
      });
    case types.LOGOUT_COMPLETE:
      return Object.assign({}, state, {
        errorMessage:    '',
        isFetching:      true,
        isAuthenticated: false
      });
  }
  
  return state;
}