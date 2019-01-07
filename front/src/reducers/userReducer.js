import { LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/userActions";

const initState = {
  email: "",
  loggedIn: false,
  loginError: false
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        loggedIn: true
      }
    case LOGIN_ERROR:
    console.log("login errror");
    
    return {
      ...state,
      loginError: true
    }
    default:
      return state
  }
}

export default userReducer;