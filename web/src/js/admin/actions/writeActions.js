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

export function writeComplete(post = {}) {
  return {
    type: types.WRITE_COMPLETE,
    post
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

export function writeSubmit(id = 0) {
  return function (dispatch, getState) {
    dispatch(writeBegin());

    return Posts.submit(getState().write, id)
      .then((resp) => {
        dispatch(writeComplete(resp));
      })
      .catch((error) => {
        dispatch(writeError(error));
      });
  };
}

export function writeLoad(id) {
  return function (dispatch) {
    dispatch(writeBegin());

    return Posts.fetchById(id)
      .then((post) => {
        dispatch(writeComplete(post));
      })
      .catch((error) => {
        throw (error);
      });
  };
}

export function writeDelete(id) {
  return function (dispatch) {
    dispatch(writeBegin());

    return Posts.deleteById(id)
      .then(() => {
        document.location = '/admin';
      })
      .catch((error) => {
        throw (error);
      });
  };
}
