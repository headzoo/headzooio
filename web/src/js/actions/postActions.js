'use strict';

import * as types from './actionTypes';
import Posts from '../api/Posts';

/**
 * 
 * @returns {Function}
 */
export function postsLoad() {
  return function (dispatch) {
    dispatch(postsLoadBegin());
    
    return Posts.fetchAll()
      .then(posts => {
        dispatch(postsLoadComplete(posts));
      })
      .catch(error => {
        throw(error);
      });
  }
}

/**
 * 
 * @returns {{type: LOAD_POSTS_BEGIN}}
 */
export function postsLoadBegin() {
  return {
    type:       types.LOAD_POSTS_BEGIN,
    posts:      [],
    isFetching: true
  };
}

/**
 * 
 * @param posts
 * @returns {{type: LOAD_POSTS_COMPLETE, posts: *}}
 */
export function postsLoadComplete(posts) {
  return {
    type:       types.LOAD_POSTS_COMPLETE,
    posts:      posts,
    isFetching: false
  };
}