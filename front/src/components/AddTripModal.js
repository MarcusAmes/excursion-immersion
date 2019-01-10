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
import fetchJsonp from 'fetch-jsonp'
import AutoComplete from 'react-autocomplete'

const style = {
  color: "red"
}

class AddTripModal extends Component { 
  state = {
    modal: false,
    name: "",
    destination: "",
    budget: 0,
    auto: []
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
      img_url: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjUwMDk2fQ"
    };
    for (let key in this.state) {
      if (key !== 'modal' && key !== 'auto' && ((key !== 'budget' && this.state[key].trim().length) || this.state[key] > 0)) {
        newTrip[key] = this.state[key]
      }
    }
    fetch(`https://api.unsplash.com/search/photos?client_id=${apiParams.key}&page=1&query=${this.state.destination}`)
    .then(res => res.json())
    .then(image => {
      for (let i = 2; i < image.results.length; i++) {
        console.log(image.results[i]);
        
        if (image.results[i].width / image.results[i].height > 1.2) {
          newTrip.img_url = image.results[i].urls.regular
          continue;
        }
      }
      this.props.addTrip(newTrip)
    })
    this.setState({
      modal: false,
      name: "",
      destination: "",
      budget: 0,
      auto: []
    })
  }

  _onChange = ({target}) => {
    this.setState({[target.name]: target.value})
    if(target.name === "destination" && target.value.length > 2) {
      fetchJsonp(`http://gd.geobytes.com/AutoCompleteCity?&q=${target.value}&sort=size&template=<geobytes%20city>,%20<geobytes%20code>`)
      .then((response) => {
          return response.json()
        }).then((json) => {
          this.setState({auto: json})
      })
    }
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
                <Input tag={AutoComplete} 
                  style={{width: "100%"}}
                  wrapperStyle={{display: "block", width: "100%"}}
                  placeholder='Destination' 
                  getItemValue={item => item}
                  items={this.state.auto}
                  renderItem={(item, isHighlighted) =>
                    <div item style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                      {item}
                    </div>
                  }
                  value={this.state.destination}
                  onChange={({target}) => this._onChange({target: {name: "destination", value: target.value}})}
                  name='destination'
                  onSelect={val => this.setState({destination: val})}/>
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