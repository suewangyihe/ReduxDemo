/**
 * Created by Administrator on 2017/2/17.
 */
import {
  PAGE_HOME,
  PAGE_MINE
} from '../actions/types';

const INITIAL_STATE = {
  page:0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PAGE_HOME:
    return {...state, page: 0};
  case PAGE_MINE:
    return {...state, page: 1};
  default:
    return state;
  }
};
