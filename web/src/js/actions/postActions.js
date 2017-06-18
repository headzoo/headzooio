'use strict';

import * as types from './actionTypes';
import postAPI from '../api/postAPI';

export function loadPosts() {
  return function (dispatch) {
    return postAPI.fetchAll()
      .then(posts => {
        dispatch(loadPostsSuccess(posts));
      })
      .catch(error => {
        throw(error);
      });
  }
}

export function loadPostsSuccess(posts) {
  return {
    type:  types.LOAD_POSTS_SUCCESS,
    posts: posts
  };
}