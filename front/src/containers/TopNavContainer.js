import { connect } from 'react-redux';
import TopNav from '../components/TopNav'
import { login } from '../actions/userActions';

const mapDispatchToProps = dispatch => {
  return {
    login: (user, history) => {
      dispatch(
        login(user, history)
      )
    }
  }
}

const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    loggedIn: user.loggedIn,
    loginError: user.loginError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)