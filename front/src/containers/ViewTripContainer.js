import { connect } from 'react-redux'
import ViewTrip from "../components/ViewTrip";
import { fetchActivities } from '../actions/activityActions';
import { fetchNotes } from '../actions/noteActions';

const mapStateToProps = ({activities, trips, notes}) => {
  return {
    activities: activities.activities,
    activitiesLoading: activities.activitiesLoading,
    activitiesError: activities.activitiesError,
    trips: trips.trips,
    notes: notes.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchActivities: (id) => {
      dispatch (
        fetchActivities(id)
      )
    },
    fetchNotes: (id) => {
      dispatch (
        fetchNotes(id)
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewTrip)