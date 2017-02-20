import {
    PAGE_HOME,
    PAGE_MINE
} from './types';


export const pagehome = () => {
  return (dispatch) => {
    dispatch({ type: PAGE_HOME });
  };
};

export const pagemine = () => {
  return (dispatch) => {
    dispatch({ type: PAGE_MINE });
  };
};


