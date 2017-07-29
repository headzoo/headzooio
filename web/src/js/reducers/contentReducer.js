import * as types from 'actions/actionTypes';
import initialState from 'store/initialState';

export default function contentReducer(state = initialState.content, action = {}) {
  switch (action.type) {
    case types.LOAD_CONTENT_BEGIN:
      return Object.assign({}, state, {
        content:    {},
        isFetching: true
      });
    case types.LOAD_CONTENT_COMPLETE:
      if (!Array.isArray(action.content) || action.content.length === 0) {
        return state;
      }

      const content = action.content[0];
      return Object.assign({}, state, {
        id:              content.id,
        name:            content.name,
        title:           content.title,
        permalink:       content.permalink,
        content:         content.content,
        publicationDate: content.publicationDate,
        published:       content.published,
        isFetching:      false
      });
    default: return state;
  }
}
