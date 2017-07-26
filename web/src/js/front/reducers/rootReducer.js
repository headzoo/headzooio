import { combineReducers } from 'redux';
import posts from 'front/reducers/postReducer';
import contact from 'front/reducers/contactReducer';

const rootReducer = combineReducers({
  posts,
  contact
});

export default rootReducer;
