/**
 * Created by Administrator on 2018/12/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store'


import Login from './components/login/login';
import Register from './containers/register';
import Main from './components/main/main';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Redirect to="/login"/>
        <Route path="/" component={Main}/>
      </ Switch>
    </HashRouter>
  </Provider>
  ),
  document.getElementById('root')
);