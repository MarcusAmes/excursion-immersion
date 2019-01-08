import React, { Component } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Col
} from 'reactstrap';
import { Link } from 'react-router-dom'

const style = {
  marginTop: "15px"
}

class SmallTrip extends Component {

  render() {
    const color = {
      0: "primary",
      1: "success",
      2: "info",
      3: "warning",
      4: "danger"
    }

    const colorNumber = Math.floor(Math.random() * 5)
    
    if (this.props.trip.img_url) {
      return (
        <Col style={style} xl="6">
          <Card style={{boxShadow: "3px 3px 10px black"}} body inverse color={color[colorNumber]}>
            <img width="100%" src={`https://source.unsplash.com/${this.props.trip.img_url}`} alt="Destination" />
            <CardTitle><h1>{this.props.trip.name}</h1></CardTitle>
            <CardText>
              Destination: {this.props.trip.destination}
            </CardText>
            <CardText>
              Budget: {this.props.trip.budget}     
            </CardText>
            <Button tag={Link} to={`/trip/${this.props.trip.id}`} color="secondary">View</Button>
          </Card>
        </Col>
      )
    }
    
    return (
      <Col xs="6" >
      <Card style={style} body inverse color={color}>
        <CardTitle><h1>{this.props.trip.name}</h1></CardTitle>
        <CardText>
          Destination: {this.props.trip.destination}
        </CardText>
        <CardText>
          Budget: {this.props.trip.budget}     
        </CardText>
        <Button tag={Link} to={`/trip/${this.props.trip.id}`} color="secondary">View</Button>
      </Card>        
      </Col>
    )
  }
}

export default SmallTrip