import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tripReducer from './tripReducer';
import activityReducer from './activityReducer';
import noteReducer from './tripNoteReducer';

const rootReducer = combineReducers({
  user: userReducer,
  trips: tripReducer,
  activities: activityReducer,
  notes: noteReducer
})

export default rootReducer