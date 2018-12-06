/**
 * Created by Administrator on 2018/12/5.
 */
import {connect} from 'react-redux';

import DashenInfo from '../components/dashen-info';

import {update} from '../redux/actions';


export default connect(
  state => ({user: state.user}),
  {update}
)(DashenInfo);

