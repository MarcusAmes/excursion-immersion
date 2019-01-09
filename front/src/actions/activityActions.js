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

export const REMOVE_ACTIVITY_SUCCESS = "REMOVE_ACTIVITY_SUCCESS";
const removeActivitySuccess = (activity) => ({ type: REMOVE_ACTIVITY_SUCCESS, payload: activity })

export const REMOVE_ACTIVITY_ERROR = "REMOVE_ACTIVITY_ERROR";
const removeActivityError = () => ({ type: REMOVE_ACTIVITY_ERROR })

export const EDIT_ACTIVITY_SUCCESS = "EDIT_ACTIVITY_SUCCESS";
const editActivitySuccess = (activity) => ({ type: EDIT_ACTIVITY_SUCCESS, payload: activity })

//THUNKS

export const fetchActivities = (id) => dispatch => {
  dispatch (
    fetchActivitiesLoading()
  )
  return fetch(`/activities/${id}`)
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
  return fetch(`/activities/add`, {
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

export const removeActivity = (id) => dispatch => {
  return fetch(`/activities/remove/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(response => {
      dispatch(
        removeActivitySuccess(response)
      )
    })
    .catch(err => dispatch(
      removeActivityError()
    ))
}

export const editActivity = (activity, id) => dispatch => {
  return fetch(`/activities/edit/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(activity),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
      response.id = id
      dispatch(
        editActivitySuccess(response)
      )
    })
    .catch(err => 
      console.log(err)     
    )
}

