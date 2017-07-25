import { combineReducers } from 'redux';
import auth from 'front/reducers/authReducer';
import posts from 'front/reducers/postReducer';
import contact from 'front/reducers/contactReducer';
import write from 'front/reducers/writeReducer';

const rootReducer = combineReducers({
  auth,
  posts,
  contact,
  write
});

export default rootReducer;
