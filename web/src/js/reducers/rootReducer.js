import { combineReducers } from 'redux';
import posts from './postsReducer';
import post from './postReducer';
import content from './contentReducer';
import auth from './authReducer';
import write from './writeReducer';
import contact from './contactReducer';

const rootReducer = combineReducers({
  posts,
  post,
  content,
  auth,
  write,
  contact
});

export default rootReducer;
