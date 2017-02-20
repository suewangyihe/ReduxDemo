import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  msg: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_USER:
    return { ...state,  msg: '' };
  case LOGIN_USER_SUCCESS:
    return { ...state, ...INITIAL_STATE, msg: 'Rilakkuma',user:action.payload};
  case LOGIN_USER_FAIL:
    return { ...state, msg: 'Login Failed.' };
  case LOGOUT_USER:
    return { ...state, msg: 'please login' };
  default:
    return state;
  }
};
