import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';
import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import Laoban from '../../containers/laoban';
import Dashen from '../../containers/dashen';
import Mssage from '../message';
import Personal from '../../containers/personal';
import Footer from '../footer';
import './index.less';


import {NavBar} from 'antd-mobile';

class Main extends Component {
  navList = [
    {path: '/laoban', title: '大神列表', icon: 'laoban', text: '大神'},
    {path: '/dashen', title: '老板列表', icon: 'dashen', text: '老板'},
    {path: '/message', title: '消息列表', icon: 'message', text: '消息'},
    {path: '/personal', title: '个人中心', icon: 'personal', text: '个人'}
  ];
  render () {
    /*
     1. 判断本地有没有cookie，如果没有，直接去登录页面
     2. 如果本地有cookie，redux中没有状态（用户之前登录过，刷新页面），必须将数据请求回来
     3. 如果本地有cookie，redux中有状态，直接显示
     */
    //1. 判断本地有没有cookie，如果没有，直接去登录页面
    const userid = Cookies.get('userid');
    if (!userid) {
      this.props.history.push('./login');
      return null;
    }

    // 2. 如果本地有cookie，redux中没有状态（用户之前登录过，刷新页面），必须将数据请求回来
    if (!this.props.user.username){
      this.props.getUserInfo();
    }

    //获取当前的路由路劲
    const {pathname} = this.props.location;

    if (pathname === '/'){
      return <Redirect to={this.props.user.redirectTo}/>
    }

    const currName = this.navList.find(item => item.path === pathname);
    console.log(currName);
    return (
      <div>
        {currName ? <NavBar className="nav-bar">{currName.title}</NavBar> : null}
        <div className="main-content">
          <Route path="/laobaninfo" component={LaobanInfo}/>
          <Route path="/dasheninfo" component={DashenInfo}/>
          <Route path="/laoban" component={Laoban}/>
          <Route path="/dashen" component={Dashen}/>
          <Route path="/message" component={Mssage}/>
          <Route path="/personal" component={Personal}/>
        </div>
        {currName ? <Footer navList={this.navList} type={this.props.user.type}/> : null}
      </div>
    )
  }
}

export default Main;