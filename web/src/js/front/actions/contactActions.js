import * as types from 'front/actions/actionTypes';
import Contact from 'api/Contact';

export function contactChange(name, value) {
  return {
    type: types.CONTACT_CHANGE,
    name,
    value
  };
}

export function contactBegin() {
  return {
    type: types.CONTACT_BEGIN
  };
}

export function contactComplete() {
  return {
    type: types.CONTACT_COMPLETE
  };
}

export function contactError(error) {
  return {
    type:         types.CONTACT_FAILURE,
    errorMessage: error
  };
}

export function contactReset() {
  return {
    type: types.CONTACT_RESET
  };
}

export function contactSubmit() {
  return (dispatch, getState) => {
    dispatch(contactBegin());

    return Contact.submit(getState().contact)
      .then((resp) => {
        dispatch(contactComplete(resp));
      })
      .catch((error) => {
        dispatch(contactError(error));
      });
  };
}
