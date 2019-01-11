import { connect } from 'react-redux'
import AddActivityModal from '../components/AddActivityModal';
import { addActivity } from '../actions/activityActions';

const mapDispatchToProps = dispatch => {
  return {
    addActivity: (activity) => {
      dispatch (
        addActivity(activity)
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(AddActivityModal)