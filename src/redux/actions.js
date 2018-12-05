/**
 * Created by Administrator on 2018/12/3.
 */
import {reqRegister,reqLogin, reqUpdate} from '../api';
import {AUTH_SUCCESS, AUTH_ERROR} from './action-types';

export const authSuccess = data => ({type: AUTH_SUCCESS, data});
export const authError = data => ({type: AUTH_ERROR, data});


//异步的actions
export const register = ({username, password, rePassword, type}) => {
  //表单验证
  if (!username) {
    //变成同步action creator
    return authError({errMsg: '请输入用户名'});
  } else if (!password) {
    return authError({errMsg: '请输入密码'});
  } else if (password !== rePassword) {
    return authError({errMsg: '两次密码输入不一致'});
  }
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

//异步的actions
export const login = ({username, password}) => {
  //表单验证
  if (!username) {
    return authError({errMsg: '请输入用户名'});
  } else if (!password) {
    return authError({errMsg: '请输入密码'});
  }

  return dispatch => {
    reqLogin({username, password})
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

//老板的action
export const update = ({header, post, company, salary, info}) => {
  //表单验证
  if (!header) {
    return authError({errMsg: '请选择头像'});
  } else if (!post) {
    return authError({errMsg: '请填写招聘职位'});
  } else if (!company) {
    return authError({errMsg: '请填写公司名称'});
  } else if (!salary) {
    return authError({errMsg: '请填写职位薪资'});
  } else if (!info) {
    return authError({errMsg: '请填写职位要求'});
  }

  return dispatch => {
    //发送请求
    reqUpdate({header, post, company, salary, info})
      .then(({data}) => {
        if (data.code === 0) {
          dispatch(authSuccess(data.data));
        } else {
          dispatch(authError({errMsg: data.msg}));
        }
      })
      .catch(err => {
        dispatch(authError({errMsg: '网络不稳定，请刷新试试~'}));
      })
  }
};