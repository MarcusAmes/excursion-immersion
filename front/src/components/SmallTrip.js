import React, { Component } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText
} from 'reactstrap';
import { Link } from 'react-router-dom'

class SmallTrip extends Component {

  componentDidMount() {

  }

  render() {
    const color = "primary"
    
    return (
      <div >
      <Card body inverse color={color}>
        <CardTitle>{this.props.trip.name}</CardTitle>
        <CardText>
          Destination: {this.props.trip.destination}
        </CardText>
        <CardText>
          Budget: {this.props.trip.budget}     
        </CardText>
        <Button tag={Link} to={`/trip/${this.props.trip.id}`} color="secondary">View</Button>
      </Card>        
      </div>
    )
  }
}

export default SmallTrip