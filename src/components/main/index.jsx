import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';
import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import Laoban from '../laoban';
import Mssage from '../message';
import Personal from '../personal';
import Footer from '../footer';


import {NavBar} from 'antd-mobile';

class Main extends Component {
  navList = [
    {path: '/laoban', title: '大神列表', icon: 'dashen', text: '大神'},
    {path: '/dashen', title: '老板列表', icon: 'laoban', text: '老板'},
    {path: '/message', title: '消息列表', icon: 'message', text: '消息'},
    {path: '/personal', title: '个人中心', icon: 'personal', text: '个人'}
  ];
  render () {
    const userid = Cookies.get('userid');
    if (!userid) {
      this.props.history.push('./login');
      return null;
    }

    //获取当前的路由路劲
    const {pathname} = this.props.location;


    const currName = this.navList.find(item => item.path === pathname);
    console.log(currName);
    return (
      <div>
        {currName ? <NavBar>{currName.title}</NavBar> : null}
        <Route path="/laobaninfo" component={LaobanInfo}/>
        <Route path="/dasheninfo" component={DashenInfo}/>
        <Route path="/laoban" component={Laoban}/>
        <Route path="/message" component={Mssage}/>
        <Route path="/personal" component={Personal}/>
        {NavBar ? <Footer navList={this.navList}/> : null}
      </div>
    )
  }
}

export default Main;