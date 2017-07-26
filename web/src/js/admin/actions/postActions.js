import * as types from 'admin/actions/actionTypes';
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
 * @returns {Function}
 */
export function postsLoad() {
  return (dispatch) => {
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
