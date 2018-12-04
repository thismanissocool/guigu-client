/**
 * Created by Administrator on 2018/12/3.
 */
import {combineReducers} from 'redux';
import {AUTH_SUCCESS, AUTH_ERROR} from './action-types'


const initState = {
  username: '',
  type: '',
  _id: '',
  errMsg: ''
};
function user (proviousState = initState, action) {
  switch (action.type){
    case AUTH_SUCCESS:
      return action.data;
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

export default combineReducers({
  user,
});