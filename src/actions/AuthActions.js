import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER
} from './types';

export const loginUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    fetch('http://116.62.24.194:8080/DaQOCloudSystem/ProjectManage/getProjectInfo?userid=2').then((response) => {
      if (response.ok) {
        loginUserSuccess(dispatch);
      } else {
        loginUserFail(dispatch);
        alert('Login Fail');
      }
    }).done();
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
  });
};
