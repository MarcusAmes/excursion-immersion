//ACTIONS
export const FETCH_TRIPS_LOADING = "FETCH_TRIPS_LOADING";
const fetchTripsLoading = () => ({ type: FETCH_TRIPS_LOADING })

export const FETCH_TRIPS_SUCCESS = "FETCH_TRIPS_SUCCESS";
const fetchTripsSuccess = (trips) => ({ type: FETCH_TRIPS_SUCCESS, payload: trips })

export const FETCH_TRIPS_ERROR = "FETCH_TRIPS_ERROR";
const fetchTripsError = () => ({ type: FETCH_TRIPS_ERROR })

export const ADD_TRIP = "ADD_TRIP";
const addTripAction = (trip) => ({ type: ADD_TRIP, payload: trip });

export const ADD_TRIP_ERROR = "ADD_TRIP_ERROR";
const addTripErrorAction = () => ({ type: ADD_TRIP_ERROR });

export const REMOVE_TRIP = "REMOVE_TRIP";
const removeTripAction = (id) => ({ type: REMOVE_TRIP, payload: id})

export const REMOVE_TRIP_ERROR = "REMOVE_TRIP_ERROR";
const removeTripErrorAction = (id) => ({ type: REMOVE_TRIP_ERROR })

//THUNKS

export const fetchTrips = (id) => dispatch => {
  dispatch(
    fetchTripsLoading()
  )
  return fetch(`http://localhost:8000/trips/${id}`)
    .then(res => res.json())
    .then(response => {
      dispatch(
        fetchTripsSuccess(response)
      )
    })
    .catch(err => dispatch(
      fetchTripsError()
      )
    )

}

export const addTrip = (trip) => dispatch => {
  console.log(trip);
  
  return fetch('http://localhost:8000/trips/add', {
      method: 'POST',
      body: JSON.stringify(trip),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => {
      console.log(response);
      
      dispatch(
        addTripAction(response)
      )
    })
    .catch(err =>
      dispatch(
        addTripErrorAction()
      )
    )
}

export const removeTrip = (id) => dispatch => {
  return fetch(`http://localhost:8000/trips/remove/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
    .then(response => {
      dispatch(
        removeTripAction(response)
      )
    })
    .catch(err =>
      dispatch(
        removeTripErrorAction()
      )
    )
}

