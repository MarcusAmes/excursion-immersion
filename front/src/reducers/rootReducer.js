import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tripReducer from './tripReducer';
import activityReducer from './activityReducer';

const rootReducer = combineReducers({
  user: userReducer,
  trips: tripReducer,
  activities: activityReducer
})

export default rootReducer