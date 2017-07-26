import * as types from 'admin/actions/actionTypes';
import initialState from 'admin/reducers/initialState';

export default function writeReducer(state = initialState.write, action = {}) {
  switch (action.type) {
    case types.WRITE_CHANGE:
      return Object.assign({}, state, {
        [action.name]: action.value
      });
    case types.WRITE_BEGIN:
      return Object.assign({}, state, {
        errorMessage: '',
        isSubmitting: true,
        isSubmitted:  false
      });
    case types.WRITE_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
        isSubmitting: false,
        isSubmitted:  false
      });
    case types.WRITE_COMPLETE:
      return Object.assign({}, state, {
        errorMessage: '',
        isSubmitting: false,
        isSubmitted:  true
      }, action.post);
    case types.WRITE_RESET:
      return Object.assign({}, initialState.write);
    default:
      return state;
  }
}
