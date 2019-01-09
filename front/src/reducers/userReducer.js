import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_ERROR } from "../actions/userActions";

const initState = {
  id: "1",
  email: "marcusames00@gmail.com",
  loggedIn: true,
  loginError: false,
  registerError: false
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
    case LOGOUT_SUCCESS:
      return {
        ...state,
        id: "",
        email: "",
        loggedIn: false,
        loginError: false
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        loggedIn: true
      }
    case REGISTER_ERROR:
      return {
        ...state,
        id: "",
        email: "",
        loggedIn: false,
        registerError: true
      }
    default:
      return state
  }
}

export default userReducer;