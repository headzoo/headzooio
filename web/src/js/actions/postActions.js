import * as types from 'actions/actionTypes';
import Posts from 'api/Posts';

export function postLoadBegin() {
  return {
    type: types.LOAD_POST_BEGIN
  };
}

export function postLoadComplete(post) {
  return {
    type: types.LOAD_POST_COMPLETE,
    post
  };
}

export function postReset() {
  return {
    type: types.POST_RESET
  };
}

export function postChange(name, value) {
  return {
    type: types.POST_CHANGE,
    name,
    value
  };
}

export function postSubmit(id = 0) {
  return function (dispatch, getState) {
    dispatch(postLoadBegin());

    return Posts.submit(getState().posts.post, id)
      .then((resp) => {
        dispatch(postLoadComplete(resp));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function postLoad(id) {
  return function (dispatch) {
    dispatch(postLoadBegin());

    return Posts.fetchById(id)
      .then((post) => {
        dispatch(postLoadComplete(post));
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
 * @returns {Function}
 */
export function postsLoad() {
  return function (dispatch) {
    dispatch(postsLoadBegin());

    return Posts.fetchAll()
      .then((posts) => {
        dispatch(postsLoadComplete(posts));
      })
      .catch((error) => {
        throw (error);
      });
  };
}
