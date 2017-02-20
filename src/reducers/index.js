import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PageReducer from './PageReducer';

export default combineReducers({
  auth: AuthReducer,
  pageIndex: PageReducer
});
