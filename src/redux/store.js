/**
 * Created by Administrator on 2018/12/3.
 */
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers'


export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
