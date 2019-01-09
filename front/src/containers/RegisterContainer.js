import { connect } from 'react-redux'
import Register from '../components/Register';
import { register } from '../actions/userActions';

const mapDispatchToProps = dispatch => {
  return {
    register: (user, history) => {
      dispatch (
        register(user, history)
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)