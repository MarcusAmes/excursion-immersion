import { LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/userActions";

const initState = {
  id: "1",
  email: "marcusames00@gmail.com",
  loggedIn: true,
  loginError: false
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        loggedIn: true
      }
    case LOGIN_ERROR:
    return {
      ...state,
      loginError: true
    }
    default:
      return state
  }
}

export default userReducer;