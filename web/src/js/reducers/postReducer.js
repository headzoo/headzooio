import * as types from 'actions/actionTypes';
import initialState from 'reducers/initialState';

export default function postReducer(state = initialState.posts, action = {}) {
  switch (action.type) {
    case types.LOAD_POSTS_COMPLETE:
      return Object.assign({}, state, {
        posts:      action.posts,
        isFetching: true
      });
      break;
  }

  return state;
}
