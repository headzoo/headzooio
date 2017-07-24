import * as types from 'actions/actionTypes';
import initialState from 'reducers/initialState';

export default function writeReducer(state = initialState.write, action = {}) {
  switch(action.type) {
    case types.WRITE_CHANGE:
      return Object.assign({}, state, {
        [action.name]: action.value
      });
      break;
    case types.WRITE_BEGIN:
      return Object.assign({}, state, {
        errorMessage: '',
        isSubmitting: true,
        isSubmitted: false
      });
      break;
    case types.WRITE_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
        isSubmitting: false,
        isSubmitted: false
      });
      break;
    case types.WRITE_COMPLETE:
      return Object.assign({}, state, {
        errorMessage: '',
        isSubmitting: false,
        isSubmitted: true
      });
      break;
    case types.WRITE_RESET:
      return Object.assign({}, initialState.write);
      break;
  }
  
  return state;
}
