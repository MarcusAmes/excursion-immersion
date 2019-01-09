import { connect } from 'react-redux'
import EditActivity from '../components/EditActivity';
import { editActivity } from '../actions/activityActions';

const mapStateToProps = ({activities}) => {
  return {
    activities: activities.activities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editActivity: (activity, id) => {
      dispatch (
        editActivity(activity, id)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditActivity)