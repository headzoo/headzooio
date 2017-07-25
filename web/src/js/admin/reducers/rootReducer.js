import { combineReducers } from 'redux';
import auth from 'admin/reducers/authReducer';
import write from 'admin/reducers/writeReducer';

const rootReducer = combineReducers({
  auth,
  write
});

export default rootReducer;
