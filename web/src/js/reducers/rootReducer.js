import { combineReducers } from 'redux';
import auth from 'reducers/authReducer';
import posts from 'reducers/postReducer';
import contact from 'reducers/contactReducer';
import write from 'reducers/writeReducer';

const rootReducer = combineReducers({
  auth,
  posts,
  contact,
  write
});

export default rootReducer;
