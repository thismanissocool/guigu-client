import React, {Component} from 'react';
import {Button, InputItem, WingBlank, WhiteSpace,NavBar, List} from 'antd-mobile';
import logo from './logo.png';
import './login.less';
import PropTypes from 'prop-types';




class Login extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  };
  state = {
    username: '',
    password: ''
  };

  handleloing = () => {
    const {username, password} = this.state;
    this.props.login({username, password});
  };

  changeInput = (type, val) => {
    this.setState({
      [type]: val
    });
  };

  register = () => {
    this.props.history.replace('/register');
  };
  render () {
    const {errMsg} = this.props.user;
    return (
      <div>
        <NavBar type="primary">硅谷直聘</NavBar>
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
        <p className="err-msg">{errMsg}</p>
        <WingBlank>
          <List>
            <InputItem onChange={val => this.changeInput('username', val)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem onChange={val => this.changeInput('password', val)} type="password">密&nbsp;&nbsp;&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace/>
            <Button type="primary" onClick={this.handleloing}>登录用户</Button>
            <WhiteSpace/>
            <Button onClick={this.register}>注册账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Login;