import { combineReducers } from "redux"
import { reducer as form } from 'redux-form'
import { routerReducer as router } from 'react-router-redux';

import user from './user'
import posts from './posts'

export default combineReducers({
  user,
  posts,

  form,
  router,
});
