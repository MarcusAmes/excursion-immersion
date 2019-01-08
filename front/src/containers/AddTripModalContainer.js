import { connect } from 'react-redux'
import AddTripModal from '../components/AddTripModal';
import { addTrip } from '../actions/tripActions';

const mapStateToProps = ({user}) => {
  return {
    id: user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTrip: (trip) => {
      dispatch(
        addTrip(trip)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTripModal)