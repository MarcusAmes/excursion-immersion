import { connect } from 'react-redux'
import Home from '../components/Home';

const mapStateToProps = ({user}) => {
  return {
    loggedIn: user.loggedIn
  }
}

export default connect(mapStateToProps)(Home)