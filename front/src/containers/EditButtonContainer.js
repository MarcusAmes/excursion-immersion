import { connect } from 'react-redux'
import { removeActivity } from '../actions/activityActions';
import EditButton from '../components/EditButton';
import { removeTrip } from '../actions/tripActions';

const mapDispatchToProps = dispatch => {
  return {
    removeActivity: (id) => {
      dispatch (
        removeActivity(id)
      )
    },
    removeTrip: (id) => {
      dispatch (
        removeTrip(id)
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(EditButton)