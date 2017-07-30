import * as types from 'actions/actionTypes';
import initialState from 'store/initialState';

export default function postReducer(state = initialState.post, action = {}) {
  switch (action.type) {
    case types.LOAD_POST_BEGIN:
      return Object.assign({}, initialState.post, {
        isFetching: true
      });
    case types.LOAD_POST_ERROR:
      return Object.assign({}, initialState.post, {
        isFetching:   false,
        errorMessage: action.error.message
      });
    case types.LOAD_POST_COMPLETE:
      return Object.assign({}, state, {
        id:              action.post.id,
        title:           action.post.title,
        content:         action.post.content,
        imageURL:        action.post.imageURL,
        publicationDate: action.post.publicationDate,
        published:       action.post.published,
        isFetching:      false,
        errorMessage:    ''
      });
    default: return state;
  }
}
