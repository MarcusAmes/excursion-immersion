import React, { Component } from 'react'
import {
  Row,
  Container,
  Col,
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import AddActivityModalContainer from '../containers/AddActivityModalContainer';
import moment from 'moment'
import { Pie } from 'react-chartjs-2'
import { Redirect } from 'react-router-dom'
import Activity from './Activity';

class ViewTrip extends Component {
  componentDidMount() {
    this.props.fetchActivities(this.props.match.params.id)
    this.props.fetchNotes(this.props.match.params.id)
  }

  render() {  
    if (this.props.activitiesLoading) {
      return <div>Loading...</div>
    }  
    const trip = this.props.trips.filter(trip => trip.id === Number(this.props.match.params.id))[0]

    if (!trip) {
      return <Redirect to='/home' />
    }

    const sortedByDate = this.props.activities.sort((a, b) => {
      return moment(a.start).isBefore(b.start) ? -1 : !moment(a.start).isBefore(b.start) ? 1 : 0
    })
    const ActivityList = sortedByDate.map((activity, i) => <Activity key={activity.id} activity={activity} last={sortedByDate.length-1 === i}/>)
    const onlyPrice = sortedByDate.filter(activity => activity.price > 1)
    const activityNames = onlyPrice.map(activity => activity.name)
    const activityPrices = onlyPrice.map(activity => activity.price)
    const budget = trip.budget - activityPrices.reduce((acc, price) => acc + price, 0)
    const colors = onlyPrice.map(() => {
      const letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    })
    let data;
    if(trip){    
      data = {
        labels: [
            'Budget Left',
            ...activityNames
          ],
          datasets: [{
            data: [budget > 0 ? budget : 0, ...activityPrices],
            backgroundColor: ["grey", ...colors],
            hoverBackgroundColor: ["grey", ...colors]
          }]
      }
    }

    const notes = this.props.notes.map(note => <ListGroupItem key={note.id}> {note.note} </ListGroupItem>)
    return (
      <Container>
        <div style={{textAlign: "center", marginBottom: "10px", marginTop: "10px"}}>
          <h3 style={{fontSize: "3em"}}>{trip.name}</h3>
          <h4>Destination: {trip.destination}</h4>
          <h4>Budget: ${trip.budget}</h4>
        </div>

        <Row>
          <Col style={{padding: "10px", height: "65vh", overflow: "auto"}} xl="8">
            <ListGroup>
              {ActivityList}
            </ListGroup>
          </Col>
          <Col xl="4">
            <div style={{display: "flex", justifyContent: "center", marginBottom: "20px", marginTop: "10px"}}>
              <AddActivityModalContainer trip_id={this.props.match.params.id} />
            </div>
            <Pie data={data} width={100} height={100}/>
            <ListGroup>
              {notes}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ViewTrip