import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import LaobanInfo from '../../containers/laoban-info';

class Main extends Component {
  render () {
    return (
      <Route path="/Laobaninfo" component={LaobanInfo}/>
    )
  }
}

export default Main;