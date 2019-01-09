import React, { Component } from 'react';
import apiParams from '../google'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  FormGroup,
  Label
} from 'reactstrap';

const style = {
  color: "red"
}

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
    let newTrip = {
      user_id: this.props.id,
      img_url: "lBL7rSRaNGs"
    };
    for (let key in this.state) {
      if (key !== 'modal' && ((key !== 'budget' && this.state[key].trim().length) || this.state[key] > 0)) {
        newTrip[key] = this.state[key]
      }
    }
    this.toggle({target: {name: null}})
    fetch(`https://api.unsplash.com/search/photos?client_id=${apiParams.key}&page=1&query=${this.state.destination}`)
    .then(res => res.json())
    .then(image => {
      console.log(image);
      
      for (let i = 2; i < image.results.length; i++) {
        console.log(image.results[i].width / image.results[i].height);
        
        if (image.results[i].width / image.results[i].height > 1.2) {
          newTrip.img_url = image.results[i].id
          continue;
        }
      }
      this.props.addTrip(newTrip)
    })
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
              <FormGroup>
                <span style={style}>*</span>
                <Label for="name">Name</Label>
                <Input onChange={this._onChange} value={this.state.name} name="name" type='text' placeholder='Trip Name' />
              </FormGroup>
              <FormGroup>
                <span style={style}>*</span>
                <Label for="destination">Destination</Label>
                <Input onChange={this._onChange} value={this.state.destination} name="destination" type='text' placeholder='Destination' />
              </FormGroup>
              <FormGroup>
                <Label for="budget">Budget</Label>
                <Input onChange={this._onChange} value={this.state.budget} name="budget" type='number' placeholder='Budget' />
              </FormGroup>
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