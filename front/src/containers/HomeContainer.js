import { connect } from 'react-redux'
import Home from '../components/Home';
import { fetchTrips } from '../actions/tripActions';

const mapStateToProps = ({user, trips}) => {
  return {
    loggedIn: user.loggedIn,
    id: user.id,
    trips: trips.trips
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTrips: (id) => {
      dispatch (
        fetchTrips(id)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)