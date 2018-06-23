import { combineReducers } from "redux"
import { reducer as form } from 'redux-form'
import { routerReducer as router } from 'react-router-redux';

import user from './user'

export default combineReducers({
  user,

  form,
  router,
});
