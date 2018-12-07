/**
 * Created by Administrator on 2018/12/6.
 */
import {connect} from 'react-redux';

import Main from '../components/main';

import {getUserInfo} from '../redux/actions'

export default connect(
  state => ({user: state.user}),
  {getUserInfo}
)(Main);
