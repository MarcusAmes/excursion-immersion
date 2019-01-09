import React, { Component } from 'react'
import { 
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Button
} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class EditActivity extends Component {
  state = {
    name: "",
    address: "",
    start: "",
    end: "",
    price: ""
  }

  componentDidMount() {
    const activity = this.props.activities.filter(activity => activity.id === Number(this.props.match.params.id))[0]
    if(activity) {
      this.setState({
        name: activity.name,
        address: activity.address ? activity.address : "",
        start: activity.start.substring(0,19),
        end: activity.end ? activity.end.substring(0, 19) : "",
        price: activity.price ? activity.price : 0
      })
    }
  }

  _onChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    })
  }

  _onSubmit = (e) => {
    e.preventDefault()
    const id = this.props.activities.filter(activity => activity.id === Number(this.props.match.params.id))[0].id
    this.props.editActivity(this.state, id)
    this.props.history.push(`/home`)
  }

  render() {
    if (!this.props.activities.length) {
      return <Redirect to = '/home' / >
    }
    
    return (
      <Container>
        <Form onSubmit={this._onSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input onChange={this._onChange} value={this.state.name} name="name" type='text' placeholder='Activity Name' />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input onChange={this._onChange} value={this.state.address} name="address" type='text' placeholder='Address' />
          </FormGroup>
          <FormGroup>
            <Label for="start">Starting date and time</Label>
            <Input onChange={this._onChange} value={this.state.start} name="start" type='datetime-local' placeholder='Start' />
          </FormGroup>
          <FormGroup>
            <Label for="end">Ending date and time</Label>
            <Input onChange={this._onChange} value={this.state.end} name="end" type='datetime-local' placeholder='End' />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input onChange={this._onChange} value={this.state.price} name="price" type='number' placeholder='Price' />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default EditActivity