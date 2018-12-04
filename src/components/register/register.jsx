import React, {Component} from 'react';
import {Button, InputItem, WingBlank, WhiteSpace,NavBar, Radio, List} from 'antd-mobile';
import PropTypes from 'prop-types';

import logo from './logo.png';
import './register.less';

let Item = List.Item;



class Register extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  };

  state = {
    laoban: true,
    username: '',
    password: '',
    rePassword: ''
  };

  changeInput = (type, val) => {
    this.setState({
      [type]: val
    });
  };

  handleRegister = async () => {
    const {username, password, rePassword, laoban} = this.state;
    console.log(username, password, rePassword, laoban);
    this.props.register({username, password, rePassword, type: laoban ? 'laoban' : 'dashen'});
    console.log(this.props);
  };

  gologin = () => {
    this.props.history.replace('/login');
  };

  render () {
    const {laoban} = this.state;
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
            <InputItem onChange={val => this.changeInput('rePassword', val)} type="password">确认密码：</InputItem>
            <WhiteSpace/>
            <Item>
              用户类型:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={!laoban} onChange={this.changeInput.bind(null, 'laoban', false)}>大神</Radio> &nbsp;&nbsp;&nbsp;
              <Radio checked={laoban} onChange={this.changeInput.bind(null, 'laoban', true)}>老板</Radio>
            </Item>
            <WhiteSpace/>
            <Button type="primary" onClick={this.handleRegister}>注册用户</Button>
            <WhiteSpace/>
            <Button onClick={this.gologin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register;