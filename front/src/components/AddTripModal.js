import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input
} from 'reactstrap';

class AddTripModal extends Component { 
  state = {
    modal: false,
    name: "",
    destination: "",
    budget: 0
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  _onSubmit = (e) => {
    e.preventDefault();
    let newTrip = {user_id: this.props.id};
    for (let key in this.state) {
      if (key !== 'modal' && ((key !== 'budget' && this.state[key].trim().length) || this.state[key] > 0)) {
        newTrip[key] = this.state[key]
      }
    }
    this.props.addTrip(newTrip)
  }

  _onChange = ({target}) => {
    this.setState({[target.name]: target.value})
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Add Trip</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Add Trip</ModalHeader>
          <ModalBody>
            <Form>
              <Input onChange={this._onChange} value={this.state.name} name="name" type='text' placeholder='Trip Name' />
              <Input onChange={this._onChange} value={this.state.destination} name="destination" type='text' placeholder='Destination' />
              <Input onChange={this._onChange} value={this.state.budget} name="budget" type='number' placeholder='Budget' />
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

export default AddTripModal;