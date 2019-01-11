import React, { Component } from 'react'
import {
  Collapse,
  Button,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import EditButtonContainer from '../containers/EditButtonContainer';
import AddNoteModalContainer from '../containers/AddNoteModalContainer';


class Notes extends Component {
  state = {
    collapse: false
  }

  toggle = () => {
    this.setState({collapse: !this.state.collapse})
  }

  render() {
    const notes = this.props.notes.map(note => 
      <ListGroupItem key={note.id}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          {note.note}
          <EditButtonContainer id={note.id} type="note"/>
        </div>
      </ListGroupItem>
    )
    
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{borderRadius: "4px", width: "310px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2em"}}>Notes</Button>
        <Collapse isOpen={this.state.collapse}>
          <AddNoteModalContainer id={this.props.id} />
          <ListGroup>
            {notes}
          </ListGroup>
        </Collapse>
      </div>
    )
  }
}

export default Notes