import { connect } from 'react-redux'
import ViewTrip from "../components/ViewTrip";
import { fetchActivities } from '../actions/activityActions';

const mapStateToProps = ({activities, trips}) => {
  return {
    activities: activities.activities,
    activitiesLoading: activities.activitiesLoading,
    activitiesError: activities.activitiesError,
    trips: trips.trips
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchActivities: (id) => {
      dispatch (
        fetchActivities(id)
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewTrip)