/**
 * Created by Administrator on 2018/12/3.
 */
import {combineReducers} from 'redux';
import {AUTH_SUCCESS, AUTH_ERROR} from './action-types'


const initState = {
  username: '',
  type: '',
  _id: '',
  errMsg: '',
  redirectTo: '',
  header: '',
  post: '',
  company: '',
  salary: '',
  info: ''
};
function user (proviousState = initState, action) {
  switch (action.type){
    case AUTH_SUCCESS:
      return {...action.data, redirectTo: gitRedirectPath(action.data.type, action.data.header)};
    case AUTH_ERROR:
      return {...initState,...action.data};
    default :
      return proviousState
  }

}


function yyy (proviousState = initState, action) {
  switch (action.type){

    default:
      return proviousState
  }



}

function gitRedirectPath (type, header){
  let path = '';
  if (type === 'laoban'){
    path = '/laoban';
  }else{
    path = '/dashen';
  }

  if (!header){
    path += 'info';
  }

  return path;
}


export default combineReducers({
  user,
});