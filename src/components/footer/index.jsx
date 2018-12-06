import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';
import './index.less';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

const Item = TabBar.Item;

class Footer extends Component {
  static propTypes = {
    navList: PropTypes.array.isRequired
  };

redirectTo = path => {
  this.props.history.push(path);
};

  render () {
    //需要过滤掉老板或者大神的信息，从redux中获取
    const type = 'laoban';

    //需要过滤掉的信息
    const filter = type === 'laoban' ? '/dashen' : '/laoban';

    const currNavList = this.props.navList.filter(item => filter === item.path ? false : true);
    return (
      <TabBar>
        {
          currNavList.map((item,index) => <Item
            key={index}
            title={item.text}
            icon={<img className="footer-img" src={require(`./images/${item.icon}.png`)} alt={item.text}/>}
            onPress={this.redirectTo.bind(null, item.path)}
            selected={this.props.location.pathname === item.path}
            selectedIcon={<img className="footer-img" src={require(`./images/${item.icon}-selected.png`)} alt={item.text}/>}
            />

          )
        }
      </TabBar>
    )
  }
}

export default withRouter(Footer);