'use strict';

import {combineReducers} from 'redux';
import auth from './authReducer';
import posts from './postReducer';

const rootReducer = combineReducers({
  auth,
  posts
});

export default rootReducer;
