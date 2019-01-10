import { FETCH_NOTES_SUCCESS, FETCH_NOTES_ERROR, ADD_NOTE_SUCCESS, ADD_NOTE_ERROR, REMOVE_NOTE_SUCCESS, REMOVE_NOTE_ERROR } from "../actions/noteActions";

const initState = {
  notes: [],
  notesError: false
}

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_NOTES_ERROR:
      return {
        ...state,
        notesError: true
      }
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        notesError: false,
        notes: action.payload
      }
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        notesError: false,
        notes: [...state.notes, action.payload]
      }
    case ADD_NOTE_ERROR:
      return {
        ...state,
        notesError: true
      }
    case REMOVE_NOTE_SUCCESS:
      return {
        ...state,
        notesError: false,
        notes: state.notes.filter(note => note.id !== action.payload.id)
      }
    case REMOVE_NOTE_ERROR:
      return {
        ...state,
        notesError: true
      }
    default:
      return state;
  }
}

export default noteReducer