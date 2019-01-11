import { connect } from 'react-redux'
import { addNote } from '../actions/noteActions';
import AddNoteModal from '../components/AddNoteModal';

const mapDispatchToProps = dispatch => {
  return {
    addNote: (note) => {
      dispatch (
        addNote(note)
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(AddNoteModal)