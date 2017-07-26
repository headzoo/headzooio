import { combineReducers } from 'redux';
import posts from 'reducers/postReducer';
import auth from 'reducers/authReducer';
import write from 'reducers/writeReducer';
import contact from 'reducers/contactReducer';

const rootReducer = combineReducers({
  posts,
  auth,
  write,
  contact
});

export default rootReducer;
