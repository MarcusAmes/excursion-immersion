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
  Row,
  FormGroup,
  Label
} from 'reactstrap';
import CalendarPicker from './CalendarPicker';

const style = {
  color: "red"
}

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

  toggle = ({target}, onOff) => {
    this.setState({
      modal: onOff,
      type: target.name ? target.name : "custom"
    });
  }

  _onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.start);
    
    let newActivity = {trip_id: this.props.trip_id}
    for (let key in this.state) {
      if (key !== "modal" && (this.state[key] > 0 || ((typeof this.state[key] === "string") && this.state[key].trim().length))) {
        newActivity[key] = this.state[key]
      }
    }
    this.props.addActivity(newActivity)
    this.setState({
      modal: false,
      name: "",
      type: "custom",
      address: "",
      start: "",
      end: "",
      price: 0
    })
  }

  _onChange = ({target}) => {
    console.log(target);
    
    this.setState({[target.name]: target.value})
  }

  render() {
    return (
      <Row>
        <Col style={{display: "flex", justifyContent: "center"}}>
          <Button onClick={(e) => this.toggle(e, true)} name="flight">Add Flight</Button>
        </Col>
        <Col style={{display: "flex", justifyContent: "center"}}>
          <Button onClick={(e) => this.toggle(e, true)} name="hotel">Add Hotel</Button>
        </Col>
        <Col style={{display: "flex", justifyContent: "center"}}>
          <Button onClick={(e) => this.toggle(e, true)} name="car">Add Rental Car</Button>
        </Col>
        <Col style={{display: "flex", justifyContent: "center"}}>
          <Button onClick={(e) => this.toggle(e, true)} name="business">Add Business Meeting</Button>
        </Col>
        <Col style={{display: "flex", justifyContent: "center"}}>
          <Button onClick={(e) => this.toggle(e, true)} name="custom">Add Custom</Button>
        </Col>
        <Modal zIndex={10} isOpen={this.state.modal} toggle={() => null} >
          <ModalHeader toggle={this.toggle}>Add {this.state.type.substring(0, 1).toUpperCase() + this.state.type.substring(1)}</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <span style={style}>*</span>
                <Label for="name">Name</Label>
                <Input onChange={this._onChange} value={this.state.name} name="name" type='text' placeholder='Activity Name' />
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input onChange={this._onChange} value={this.state.address} name="address" type='text' placeholder='Address' />
              </FormGroup>
              <FormGroup>
                <span style={style}>*</span>
                <Label for="start">Starting date and time</Label>
                <CalendarPicker name="start" onChange={this._onChange} />
              </FormGroup>
              <FormGroup>
                <Label for="ens">Ending date and time</Label>
                <CalendarPicker name="end" onChange={this._onChange} />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input onChange={this._onChange} value={this.state.price} name="price" type='number' placeholder='Price' />
              </FormGroup>
              <span style={style}>* required</span>
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