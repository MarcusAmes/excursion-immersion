import { connect } from 'react-redux'
import Activity from '../components/Activity';
import { removeActivity } from '../actions/activityActions';

const mapDispatchToProps = dispatch => {
  return {
    removeActivity: (id) => {
      dispatch (
        removeActivity(id)
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(Activity)