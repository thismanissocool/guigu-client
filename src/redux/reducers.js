/**
 * Created by Administrator on 2018/12/3.
 */
import {combineReducers} from 'redux';


const initState = 0;
function xxx (proviousState = initState, action) {
  switch (action.type){
    default:
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
  xxx,
  yyy
});