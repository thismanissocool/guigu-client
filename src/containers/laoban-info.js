/**
 * Created by Administrator on 2018/12/5.
 */
import {connect} from 'react-redux';

import LaobaoInfo from '../components/laoban-info';
import {update} from '../redux/actions';

export default connect(
  state => ({user: state.user}),
  {update}
)(LaobaoInfo);