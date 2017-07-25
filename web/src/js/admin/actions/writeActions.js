import * as types from 'front/actions/actionTypes';
import Posts from 'api/Posts';

export function writeChange(name, value) {
  return {
    type: types.WRITE_CHANGE,
    name,
    value
  };
}

export function writeBegin() {
  return {
    type: types.WRITE_BEGIN
  };
}

export function writeComplete() {
  return {
    type: types.WRITE_COMPLETE
  };
}

export function writeError(error) {
  return {
    type:         types.WRITE_FAILURE,
    errorMessage: error
  };
}

export function writeReset() {
  return {
    type: types.WRITE_RESET
  };
}

export function writeSubmit() {
  return function (dispatch, getState) {
    dispatch(writeBegin());

    return Posts.submit(getState().write)
      .then((resp) => {
        dispatch(writeComplete(resp));
      })
      .catch((error) => {
        dispatch(writeError(error));
      });
  };
}
