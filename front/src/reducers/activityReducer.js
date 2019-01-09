import { FETCH_ACTIVITIES_LOADING, FETCH_ACTIVITIES_SUCCESS, FETCH_ACTIVITIES_ERROR, ADD_ACTIVITY_SUCCESS, ADD_ACTIVITY_ERROR, REMOVE_ACTIVITY_SUCCESS, REMOVE_ACTIVITY_ERROR, EDIT_ACTIVITY_SUCCESS } from "../actions/activityActions";

const initState = {
  activities: [],
  activitiesLoading: false,
  activitiesError: false
}

const activityReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES_LOADING:
      return {
        ...state,
        activitiesLoading: true
      }
    case FETCH_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activitiesError: false,
        activitiesLoading: false,
        activities: action.payload
      }
    case FETCH_ACTIVITIES_ERROR:
      return {
        ...state,
        activitiesError: true
      }
    case ADD_ACTIVITY_SUCCESS:
      return {
        ...state,
        activitiesError: false,
        activitiesLoading: false,
        activities: [...state.activities, action.payload]
      }
    case ADD_ACTIVITY_ERROR:
      return {
        ...state,
        activitiesError: true
      }
    case REMOVE_ACTIVITY_SUCCESS:
      console.log(action.payload);
      
      return {
        ...state,
        activitiesError: false,
        activities: state.activities.filter(activity => activity.id !== action.payload.id)
      }
    case REMOVE_ACTIVITY_ERROR:
      return {
        ...state,
        activitiesError: true
      }
    case EDIT_ACTIVITY_SUCCESS:
      return {
        ...state,
        activities: [...state.activities.filter(activity => activity.id !== action.payload.id), action.payload]
      }
    default:
      return state;
  }
}

export default activityReducer