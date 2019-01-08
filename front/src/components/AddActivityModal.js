import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Col,
  Row
} from 'reactstrap';

class AddActivityModal extends Component { 
  state = {
    modal: false,
    name: "",
    type: "custom",
    address: "",
    start: "",
    end: "",
    price: 0
  }

  toggle = ({target}) => {
    this.setState({
      modal: !this.state.modal,
      type: target.name ? target.name : "custom"
    });
  }

  _onSubmit = (e) => {
    e.preventDefault();
    let newActivity = {trip_id: this.props.trip_id}
    for (let key in this.state) {
      if (key !== "modal" && (this.state[key] > 0 || ((typeof this.state[key] === "string") && this.state[key].trim().length))) {
        newActivity[key] = this.state[key]
      }
    }
    this.props.addActivity(newActivity)
    this.toggle({target: {name: null}})
  }

  _onChange = ({target}) => {
    this.setState({[target.name]: target.value})
  }

  render() {
    return (
      <Row>
        <Col>
          <Button onClick={this.toggle} name="flight">Add Flight</Button>
        </Col>
        <Col>
          <Button onClick={this.toggle} name="hotel">Add Hotel</Button>
        </Col>
        <Col>
          <Button onClick={this.toggle} name="car">Add Rental Car</Button>
        </Col>
        <Col>
          <Button onClick={this.toggle} name="custom">Add Custom</Button>
        </Col>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Add {this.state.type.substring(0, 1).toUpperCase() + this.state.type.substring(1)}</ModalHeader>
          <ModalBody>
            <Form>
              <Input onChange={this._onChange} value={this.state.name} name="name" type='text' placeholder='Activity Name' />
              <Input onChange={this._onChange} value={this.state.address} name="address" type='text' placeholder='Address' />
              <Input onChange={this._onChange} value={this.state.start} name="start" type='datetime-local' placeholder='Start' />
              {/* <Input onChange={this._onChange} value={this.state.end} name="end" type='datetime-local' placeholder='End' /> */}
              <Input onChange={this._onChange} value={this.state.price} name="price" type='number' placeholder='Price' />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._onSubmit}>Add</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Row>
    );
  }
}

export default AddActivityModal;