/**
 * Created by Administrator on 2018/12/4.
 */
import {connect} from 'react-redux';

//引入ui组件
import Register from '../components/register/register';

//引入action
import {register} from '../redux/actions';

export default connect(
  state => ({user: state.user}),
  {register}
)(Register);