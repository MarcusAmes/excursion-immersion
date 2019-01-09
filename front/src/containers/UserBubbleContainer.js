import { connect } from 'react-redux'
import { logout } from '../actions/userActions';
import UserBubble from '../components/UserBubble';

const mapDispatchToProps = dispatch => {
  return {
    logout: (history) => {
      dispatch (
        logout(history)
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(UserBubble)