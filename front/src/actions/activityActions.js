//ACTIONS

export const FETCH_ACTIVITIES_LOADING = "FETCH_ACTIVITIES_LOADING";
const fetchActivitiesLoading = () => ({ type: FETCH_ACTIVITIES_LOADING })

export const FETCH_ACTIVITIES_SUCCESS = "FETCH_ACTIVITIES_SUCCESS";
const fetchActivitiesSuccess = (activities) => ({ type: FETCH_ACTIVITIES_SUCCESS, payload: activities })

export const FETCH_ACTIVITIES_ERROR = "FETCH_ACTIVITIES_ERROR";
const fetchActivitiesError = () => ({ type: FETCH_ACTIVITIES_ERROR })

export const ADD_ACTIVITY_SUCCESS = "ADD_ACTIVITY_SUCCESS";
const addActivitySuccess = (activity) => ({ type: ADD_ACTIVITY_SUCCESS, payload: activity })

export const ADD_ACTIVITY_ERROR = "ADD_ACTIVITY_ERROR";
const addActivityError = () => ({ type: ADD_ACTIVITY_ERROR })

//THUNKS

export const fetchActivities = (id) => dispatch => {
  dispatch (
    fetchActivitiesLoading()
  )
  return fetch(`http://localhost:8000/activities/${id}`)
    .then(res => res.json())
    .then(response => {
      dispatch(
        fetchActivitiesSuccess(response)
      )
    })
    .catch(err => dispatch(
      fetchActivitiesError()
    ))
}

export const addActivity = (activity) => dispatch => {
  return fetch(`http://localhost:8000/activities/add`, {
    method: 'POST',
      body: JSON.stringify(activity),
      headers: {
        'Content-Type': 'application/json'
      }
  })
    .then(res => res.json())
    .then(response => {
      dispatch(
        addActivitySuccess(response)
      )
    })
    .catch(err => dispatch(
      addActivityError()
    ))
}