import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import { FaPlusSquare } from 'react-icons/fa';

class AddNoteModal extends React.Component {
  state = {
    modal: false,
    note: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  _onChange = ({target}) => {
    this.setState({note: target.value})
  }

  _onSubmit = () => {
    this.props.addNote({note: this.state.note, trip_id: this.props.id})
    this.setState({modal: false, note: ""})
  }

  render() {
    return (
      <div>
        <Button style={{borderRadius: "4px", width: "310px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.2em", marginTop: "10px", marginBottom: "10px"}} color="danger" onClick={this.toggle}>
          Add Note
          <FaPlusSquare style={{marginLeft: "10px"}} size="1.5em"/>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Note</ModalHeader>
          <ModalBody>
            <Form>
              <Input onChange={this._onChange} type="text" name="note" placeholder="Add Note" />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._onSubmit}>Add</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddNoteModal;