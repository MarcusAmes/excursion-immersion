import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import SmallTrip from './SmallTrip';
import AddTripModalContainer from '../containers/AddTripModalContainer';

class Home extends Component {

componentDidMount() {
  this.props.fetchTrips(this.props.id)
}

  render() {
    if(!this.props.loggedIn) {
      return <Redirect to = "/" />
    }

    const tripsList = this.props.trips.map(trip => <SmallTrip key={trip.id} trip={trip}/>)
    
    return (
      <Container>
        <Row>
          <Col xl="8">
            {tripsList}
          </Col>
          <Col xl="4">
            <AddTripModalContainer />
          </Col>
        </Row>

      </Container>
    )
  }
}

export default Home