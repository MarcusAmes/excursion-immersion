import { FETCH_TRIPS_LOADING, FETCH_TRIPS_SUCCESS, FETCH_TRIPS_ERROR, ADD_TRIP, ADD_TRIP_ERROR, REMOVE_TRIP } from "../actions/tripActions";

const initState = {
  trips: [],
  tripsLoading: false,
  tripsError: false
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_TRIPS_LOADING:
      return {
        ...state,
        tripsLoading: true
      }
    case FETCH_TRIPS_SUCCESS:
      return {
        ...state,
        tripsLoading: false,
        tripsError: false,
        trips: action.payload
      }
    case FETCH_TRIPS_ERROR:
      return {
        ...state,
        tripsError: true
      }
    case ADD_TRIP:
      return {
        ...state,
        tripsError: false,
        trips: [...state.trips, action.payload]
      }
    case ADD_TRIP_ERROR:
      return {
        ...state,
        tripsError: true
      }
    case REMOVE_TRIP:   
      return {
        ...state,
        trips: state.trips.filter(trip => trip.id !== action.payload.id)
      }
    default:
      return state
  }
}

export default userReducer;