import React, {Component} from 'react';
import {Button, InputItem, WingBlank, WhiteSpace,NavBar, List} from 'antd-mobile';
import logo from './logo.png';
import './login.less'
class Login extends Component {
  state = {
    username: '',
    password: ''
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
    return (
      <div>
        <NavBar type="primary">硅谷直聘</NavBar>
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
        <WingBlank>
          <List>
            <InputItem onChange={val => this.changeInput('username', val)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem onChange={val => this.changeInput('password', val)}>密&nbsp;&nbsp;&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace/>
            <Button type="primary">登录用户</Button>
            <WhiteSpace/>
            <Button onClick={this.register}>注册账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Login;