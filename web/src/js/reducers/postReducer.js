import * as types from 'actions/actionTypes';
import initialState from 'reducers/initialState';

export default function postReducer(state = initialState.posts, action = {}) {
  switch (action.type) {
    case types.LOAD_POSTS_BEGIN:
      return Object.assign({}, state, {
        posts:      [],
        isFetching: true
      });
      break;
    case types.LOAD_POSTS_COMPLETE:
      return Object.assign({}, state, {
        posts:      action.posts,
        isFetching: false
      });
      break;
    case types.LOAD_POST_BEGIN:
      return Object.assign({}, state, {
        post:       {},
        isFetching: true
      });
      break;
    case types.LOAD_POST_COMPLETE:
      return Object.assign({}, state, {
        post:       action.post,
        isFetching: false
      });
      break;
    case types.POST_CHANGE:
      return Object.assign({}, state, {
        post: Object.assign({}, state.post, {
          [action.name]: action.value
        })
      });
      break;
    case types.POST_RESET:
      return Object.assign({}, initialState.posts, {
        post: {},
        isFetching: false
      });
      break;
    default:
      return state;
      break;
  }
}
