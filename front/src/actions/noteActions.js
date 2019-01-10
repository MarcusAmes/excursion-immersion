//ACTIONS

export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
const fetchNotesSuccess = (notes) => ({ type: FETCH_NOTES_SUCCESS, payload: notes })

export const FETCH_NOTES_ERROR = "FETCH_NOTES_ERROR";
const fetchNotesError = () => ({ type: FETCH_NOTES_ERROR })

export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
const addNoteSuccess = (note) => ({ type: ADD_NOTE_SUCCESS, payload: note })

export const ADD_NOTE_ERROR = "ADD_NOTE_ERROR";
const addNoteError = () => ({ type: ADD_NOTE_ERROR })

export const REMOVE_NOTE_SUCCESS = "REMOVE_NOTE_SUCCESS";
const removeNoteSuccess = (note) => ({ type: REMOVE_NOTE_SUCCESS, payload: note })

export const REMOVE_NOTE_ERROR = "REMOVE_NOTE_ERROR";
const removeNoteError = () => ({ type: REMOVE_NOTE_ERROR })

//THUNKS

export const fetchNotes = (id) => dispatch => {
  return fetch(`/trips/notes/${id}`)
    .then(res => res.json())
    .then(response => {
      dispatch(
        fetchNotesSuccess(response)
      )
    })
    .catch(err => dispatch(
      fetchNotesError()
    ))
}

export const addNote = (note) => dispatch => {
  return fetch(`/trips/notes/add`, {
    method: 'POST',
    body: JSON.stringify(note),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(response => {
      dispatch(
        addNoteSuccess(response)
      )
    })
    .catch(err => dispatch(
      addNoteError()
    ))
}

export const removeNote = (id) => dispatch => {
  return fetch(`/trips/notes/remove/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(response => {
      dispatch(
        removeNoteSuccess(response)
      )
    })
    .catch(err => dispatch(
      removeNoteError()
    ))
}