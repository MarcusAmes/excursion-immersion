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

const mapStateToProps = ({user}) => {
  return {
    registerError: user.registerError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)