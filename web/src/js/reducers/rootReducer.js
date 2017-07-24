'use strict';

import {combineReducers} from 'redux';
import auth from './authReducer';
import posts from './postReducer';
import contact from './contactReducer';

const rootReducer = combineReducers({
  auth,
  posts,
  contact
});

export default rootReducer;
