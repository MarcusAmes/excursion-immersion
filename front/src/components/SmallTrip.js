import React, { Component } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Col,
  CardImg,
  CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom'
import EditButtonContainer from '../containers/EditButtonContainer';

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
    
    return (
      <Col style={style} xl="4" lg="4" md="6" sm="12" xs="12">
        <Card style={{boxShadow: "3px 3px 10px black"}} inverse color={color[colorNumber]}>
          <div style={{height: "0px", position: "relative", top: "0px", display: "flex", justifyContent: "flex-end"}}>
            <EditButtonContainer height="40px" type="trip" id={this.props.trip.id} />
          </div>
          <CardImg style={{}} top width="100%" src={`https://source.unsplash.com/${this.props.trip.img_url}`} alt="Destination" />
          <CardBody>
            <CardTitle><h1>{this.props.trip.name}</h1></CardTitle>
            <CardText>
              Destination: {this.props.trip.destination}
            </CardText>
            {this.props.trip.budget > 0 && <CardText>
              Budget: {this.props.trip.budget}     
            </CardText>}
            <Button tag={Link} to={`/trip/${this.props.trip.id}`} color="secondary">View</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default SmallTrip