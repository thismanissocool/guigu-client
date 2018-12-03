import React, {Component} from 'react';
import {Button, InputItem, WingBlank, WhiteSpace,NavBar, Radio, List} from 'antd-mobile';

import logo from './logo.png';
import './register.less';

let Item = List.Item;



class Register extends Component {
  state = {
    isBossChecked: true,
    username: '',
    password: '',
    repassword: ''
  };

  // changeChecked = type => {
  //   if (type === 'Boss'){
  //     this.setState({
  //       isBossChecked: true
  //     });
  //   }else {
  //     this.setState({
  //       isBossChecked: false
  //     });
  //   }
  // };

  changeInput = (type, val) => {
    this.setState({
      [type]: val
    });
  };

  gologin = () => {
    this.props.history.replace('/login');
  };

  render () {
    const {isBossChecked} = this.state;
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
            <InputItem onChange={val => this.changeInput('repassword', val)}>确认密码：</InputItem>
            <WhiteSpace/>
            <Item>
              用户类型:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={!isBossChecked} onChange={this.changeInput.bind(null, 'isBossChecked', false)}>大神</Radio> &nbsp;&nbsp;&nbsp;
              <Radio checked={isBossChecked} onChange={this.changeInput.bind(null, 'isBossChecked', true)}>老板</Radio>
            </Item>
            <WhiteSpace/>
            <Button type="primary">注册用户</Button>
            <WhiteSpace/>
            <Button onClick={this.gologin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register;