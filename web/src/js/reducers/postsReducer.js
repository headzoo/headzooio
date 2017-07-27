import * as types from 'actions/actionTypes';
import initialState from 'store/initialState';

export default function postsReducer(state = initialState.posts, action = {}) {
  switch (action.type) {
    case types.LOAD_POSTS_BEGIN:
      return Object.assign({}, state, {
        posts:      [],
        isFetching: true
      });
    case types.LOAD_POSTS_COMPLETE:
      return Object.assign({}, state, {
        posts:      action.posts,
        isFetching: false
      });
    default: return state;
  }
}
