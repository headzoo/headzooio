import * as types from 'front/actions/actionTypes';
import initialState from 'front/reducers/initialState';

export default function contactReducer(state = initialState.contact, action = {}) {
  switch (action.type) {
    case types.CONTACT_CHANGE:
      return Object.assign({}, state, {
        [action.name]: action.value
      });
    case types.CONTACT_BEGIN:
      return Object.assign({}, state, {
        errorMessage: '',
        isSubmitting: true,
        isSubmitted:  false
      });
    case types.CONTACT_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
        isSubmitting: false,
        isSubmitted:  false
      });
    case types.CONTACT_COMPLETE:
      return Object.assign({}, state, {
        errorMessage: '',
        isSubmitting: false,
        isSubmitted:  true
      });
    case types.CONTACT_RESET:
      return Object.assign({}, initialState.contact);
    default:
      return state;
  }
}
