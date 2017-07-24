'use strict';

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function contactReducer(state = initialState.contact, action = {}) {
  switch(action.type) {
    case types.CONTACT_CHANGE:
      return Object.assign({}, state, {
        [action.name]: action.value
      });
      break;
    case types.CONTACT_BEGIN:
      return Object.assign({}, state, {
        errorMessage: '',
        isSubmitting: true,
        isSubmitted: false
      });
      break;
    case types.CONTACT_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
        isSubmitting: false,
        isSubmitted: false
      });
      break;
    case types.CONTACT_COMPLETE:
      return Object.assign({}, state, {
        errorMessage: '',
        isSubmitting: false,
        isSubmitted: true
      });
      break;
    case types.CONTACT_RESET:
      return Object.assign({}, initialState.contact);
      break;
  }
  
  return state;
}

