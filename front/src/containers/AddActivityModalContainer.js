import { connect } from 'react-redux'
import AddActivityModal from '../components/AddActivityModal';
import { addActivity } from '../actions/activityActions';

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addActivity: (activity) => {
      dispatch (
        addActivity(activity)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddActivityModal)