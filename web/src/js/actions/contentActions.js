import * as types from 'actions/actionTypes';
import Content from 'api/Content';

/**
 *
 * @returns {{type: LOAD_CONTENT_BEGIN}}
 */
export function contentLoadBegin() {
  return {
    type: types.LOAD_CONTENT_BEGIN
  };
}

/**
 *
 * @param content
 * @returns {{type: LOAD_CONTENT_COMPLETE, content: *}}
 */
export function contentLoadComplete(content) {
  return {
    type: types.LOAD_CONTENT_COMPLETE,
    content
  };
}

/**
 *
 * @returns {Function}
 */
export function contentLoad(name) {
  return (dispatch) => {
    dispatch(contentLoadBegin());

    return Content.fetchByName(name)
      .then((content) => {
        dispatch(contentLoadComplete(content));
      })
      .catch((error) => {
        throw (error);
      });
  };
}
