import * as types from 'admin/actions/actionTypes';
import Auth from 'api/Auth';

/**
 *
 * @returns {{type: LOGIN_BEGIN, creds: *, isFetching: boolean, isAuthenticated: boolean}}
 */
export function loginBegin() {
  return {
    type: types.LOGIN_BEGIN
  };
}

/**
 *
 * @param {{token: string}} resp
 * @returns {{type: LOGIN_COMPLETE, token: *, isFetching: boolean, isAuthenticated: boolean}}
 */
export function loginComplete(resp) {
  return {
    type:  types.LOGIN_COMPLETE,
    token: resp.token
  };
}

/**
 *
 * @param {string} message
 * @returns {{type: LOGIN_FAILURE, message: *, isFetching: boolean, isAuthenticated: boolean}}
 */
export function loginError(message) {
  return {
    type: types.LOGIN_FAILURE,
    message
  };
}

/**
 *
 * @param {{username: string, password: string}} creds
 * @returns {Function}
 */
export function login(creds) {
  return function (dispatch) {
    dispatch(loginBegin());

    return Auth.login(creds)
      .then((resp) => {
        dispatch(loginComplete(resp));
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
}

/**
 *
 * @returns {{type: LOGOUT_BEGIN, isFetching: boolean, isAuthenticated: boolean}}
 */
export function logoutBegin() {
  return {
    type: types.LOGOUT_BEGIN
  };
}

/**
 *
 * @returns {{type: LOGOUT_COMPLETE, isFetching: boolean, isAuthenticated: boolean}}
 */
export function logoutComplete() {
  return {
    type: types.LOGOUT_COMPLETE
  };
}

/**
 *
 * @returns {Function}
 */
export function logout() {
  return (dispatch) => {
    dispatch(logoutBegin());
    Auth.logout();
    dispatch(logoutComplete());
  };
}
