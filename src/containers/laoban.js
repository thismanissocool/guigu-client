/**
 * Created by Administrator on 2018/12/6.
 */
import {connect} from 'react-redux';

import Laoban from '../components/laoban';

import {getUserList} from '../redux/actions';

export default connect(
  state => ({userList: state.userList}),
  {getUserList}
)(Laoban);