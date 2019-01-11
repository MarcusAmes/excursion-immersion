import { connect } from 'react-redux'
import { removeActivity } from '../actions/activityActions';
import EditButton from '../components/EditButton';
import { removeTrip } from '../actions/tripActions';
import { removeNote } from '../actions/noteActions';

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
    },
    removeNote: (id) => {
      dispatch(
        removeNote(id)
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(EditButton)