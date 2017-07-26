import { combineReducers } from 'redux';
import posts from 'admin/reducers/postReducer';
import auth from 'admin/reducers/authReducer';
import write from 'admin/reducers/writeReducer';

const rootReducer = combineReducers({
  posts,
  auth,
  write
});

export default rootReducer;
