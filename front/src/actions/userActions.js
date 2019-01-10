//Actions

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })

export const LOGIN_ERROR = "LOGIN_ERROR"
const loginError = () => ({ type: LOGIN_ERROR })

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
const logoutSuccess = () => ({ type: LOGOUT_SUCCESS })

export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user})

export const REGISTER_ERROR = "REGISTER_ERROR"
const registerError = (user) => ({ type: REGISTER_ERROR })


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

export const logout = (history) => dispatch => {
  dispatch (
    logoutSuccess()
  )
  history.push('/')
}

export const register = (user, history) => dispatch => {
  return fetch('/users/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
      dispatch(
        registerSuccess(response)
      )
      history.push('/home')
    })
    .catch(err => {
      dispatch(
        registerError()
      )
    })
}
