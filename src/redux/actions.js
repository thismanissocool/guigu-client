/**
 * Created by Administrator on 2018/12/3.
 */
import {reqRegister} from '../api';
import {AUTH_SUCCESS, AUTH_ERROR} from './action-types';

export const authSuccess = data => ({type: AUTH_SUCCESS, data});
export const authError = data => ({type: AUTH_ERROR, data});


//异步的actions
export const register = ({username, password, rePassword, type}) => {
  return dispatch => {
    reqRegister({username, password, type})
      .then(({data}) => {
        if (data.code === 0){
          dispatch(authSuccess(data.data))
        }else {
          dispatch(authError(data.msg))
        }
      })
      .catch(err => {
        dispatch(authError({errMsg:'网络错误，再试试~~~'}))
      })
  }
};