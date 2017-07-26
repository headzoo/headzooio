import * as types from 'actions/actionTypes';
import initialState from 'store/initialState';

export default function postReducer(state = initialState.post, action = {}) {
  switch (action.type) {
    case types.LOAD_POST_BEGIN:
      return Object.assign({}, state, {
        post:       {},
        isFetching: true
      });
      break;
    case types.LOAD_POST_COMPLETE:
      return Object.assign({}, state, {
        title:           action.post.title,
        content:         action.post.content,
        imageURL:        action.post.imageURL,
        publicationDate: action.post.publicationDate,
        published:       action.post.published,
        isFetching:      false
      });
      break;
    default:
      return state;
      break;
  }
}
