import React, { Component } from 'react'
import { Row, Container, Col} from 'reactstrap'
import AddActivityModalContainer from '../containers/AddActivityModalContainer';
import moment from 'moment'
import { Pie } from 'react-chartjs-2'
import ActivityContainer from '../containers/ActivityContainer';

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
      this.props.history.push('/home');  
    }

    const sortedByDate = this.props.activities.sort((a, b) => {
      return moment(a.start).isBefore(b.start) ? -1 : !moment(a.start).isBefore(b.start) ? 1 : 0
    })
    const ActivityList = sortedByDate.map(activity => <ActivityContainer key={activity.id} activity={activity}/>)
    const activityNames = this.props.activities.map(activity => activity.name)
    const activityPrices = this.props.activities.map(activity => activity.price)
    let data;
    if(trip){    
      data = {
        labels: [
            'Budget',
            ...activityNames
          ],
          datasets: [{
            data: [trip.budget, ...activityPrices],
            backgroundColor: [
              'grey',
              '#36A2EB',
              '#FFCE56',
              '#FF6384'
            ],
            hoverBackgroundColor: [
              'grey',
              '#36A2EB',
              '#FFCE56',
              '#FF6384'
            ]
          }]
      }
    }
    return (
      <Container>
        <div style={{marginBottom: "20px", marginTop: "10px"}}>
          <AddActivityModalContainer trip_id={this.props.match.params.id} />
        </div>

        <Row>
          <Col xl="8">
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