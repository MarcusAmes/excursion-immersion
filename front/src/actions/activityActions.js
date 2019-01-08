//ACTIONS

export const FETCH_ACTIVITIES_LOADING = "FETCH_ACTIVITIES_LOADING";
const fetchActivitiesLoading = () => ({ type: FETCH_ACTIVITIES_LOADING })

export const FETCH_ACTIVITIES_SUCCESS = "FETCH_ACTIVITIES_SUCCESS";
const fetchActivitiesSuccess = (activities) => ({ type: FETCH_ACTIVITIES_SUCCESS, payload: activities })

export const FETCH_ACTIVITIES_ERROR = "FETCH_ACTIVITIES_ERROR";
const fetchActivitiesError = () => ({ type: FETCH_ACTIVITIES_ERROR })

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
