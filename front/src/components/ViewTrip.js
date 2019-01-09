import React, { Component } from 'react'
import { Row, Container, Col} from 'reactstrap'
import AddActivityModalContainer from '../containers/AddActivityModalContainer';
import moment from 'moment'
import { Pie } from 'react-chartjs-2'
import { Redirect } from 'react-router-dom'
import Activity from './Activity';

class ViewTrip extends Component {
  componentDidMount() {
    this.props.fetchActivities(this.props.match.params.id)
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
            'Budget',
            ...activityNames
          ],
          datasets: [{
            data: [trip.budget, ...activityPrices],
            backgroundColor: ["grey", ...colors],
            hoverBackgroundColor: ["grey", ...colors]
          }]
      }
    }
    return (
      <Container>
        <div style={{textAlign: "center", marginBottom: "10px"}}>
          <h1 style={{fontSize: "4em"}}>{trip.name}</h1>
          <h4>Destination: {trip.destination}</h4>
        </div>
        <div style={{marginBottom: "20px", marginTop: "10px"}}>
          <AddActivityModalContainer trip_id={this.props.match.params.id} />
        </div>

        <Row>
          <Col style={{padding: "10px", height: "80vh", overflow: "auto"}} xl="8">
            {ActivityList}
          </Col>
          <Col xl="4">
            <Pie data={data} width={100} height={100}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ViewTrip