import * as types from 'actions/actionTypes';
import Posts from 'api/Posts';

/**
 *
 * @returns {{type: LOAD_POSTS_BEGIN}}
 */
export function postsLoadBegin() {
  return {
    type: types.LOAD_POSTS_BEGIN
  };
}

/**
 *
 * @param posts
 * @returns {{type: LOAD_POSTS_COMPLETE, posts: *}}
 */
export function postsLoadComplete(posts) {
  return {
    type: types.LOAD_POSTS_COMPLETE,
    posts
  };
}

/**
 *
 * @param {boolean} isAdmin
 * @returns {Function}
 */
export function postsLoad(isAdmin = false) {
  return (dispatch) => {
    dispatch(postsLoadBegin());

    return Posts.fetchAll(isAdmin)
      .then((posts) => {
        dispatch(postsLoadComplete(posts));
      })
      .catch((error) => {
        throw (error);
      });
  };
}


/**
 *
 * @returns {{type: LOAD_POSTS_BEGIN}}
 */
export function postLoadBegin() {
  return {
    type: types.LOAD_POST_BEGIN
  };
}

/**
 *
 * @param post
 * @returns {{type: LOAD_POSTS_COMPLETE, posts: *}}
 */
export function postLoadComplete(post) {
  return {
    type: types.LOAD_POST_COMPLETE,
    post
  };
}

/**
 *
 * @returns {{type: LOAD_POST_ERROR, error: Error}}
 */
export function postLoadError(error) {
  return {
    type: types.LOAD_POST_ERROR,
    error
  };
}

/**
 *
 * @returns {Function}
 */
export function postLoad(id) {
  return (dispatch) => {
    dispatch(postLoadBegin());

    return Posts.fetchById(id)
      .then((post) => {
        dispatch(postLoadComplete(post));
      })
      .catch((error) => {
        dispatch(postLoadError(error));
      });
  };
}
