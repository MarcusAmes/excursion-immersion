//Actions

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })

export const LOGIN_ERROR = "LOGIN_ERROR"
const loginError = () => ({ type: LOGIN_ERROR })

//Thunks

export const login = (user, history) => dispatch => {
  return fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {   
      dispatch(
        loginSuccess(response)
      )
      history.push('/home')
    })
    .catch(err => {
      dispatch(
        loginError()
      )
    })
}
