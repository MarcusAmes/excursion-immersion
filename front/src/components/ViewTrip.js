import React, { Component } from 'react'
import Activity from './Activity';
import { Row, Container, Col} from 'reactstrap'
import AddActivityModalContainer from '../containers/AddActivityModalContainer';
import moment from 'moment'
import { Pie } from 'react-chartjs-2'

class ViewTrip extends Component {

  componentDidMount() {
    this.props.fetchActivities(this.props.match.params.id)
  }

  _onClick = ({target}) => {
    console.log(target.name);
  }

  render() {     
    if (this.props.activitiesLoading) {
      return <div>Loading...</div>
    }  

    const sortedByDate = this.props.activities.sort((a, b) => {
      return moment(a.start).isBefore(b.start) ? -1 : !moment(a.start).isBefore(b.start) ? 1 : 0
    })
    const ActivityList = sortedByDate.map(activity => <Activity key={activity.id} activity={activity}/>)
    
    const data = {
      labels: [
          'Budget',
          'Green',
          'Yellow'
        ],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
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
            <Pie data={data}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ViewTrip