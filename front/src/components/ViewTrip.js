import React, { Component } from 'react'
import Activity from './Activity';
import { Row, Col, Container, Button } from 'reactstrap'

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
      return a.start > b.start
    })

    const ActivityList = sortedByDate.map(activity => <Activity key={activity.id} activity={activity}/>)
    
    return (
      <Container>
        <Row style={{marginBottom: "20px", marginTop: "10px"}}>
          <Col>
            <Button onClick={this._onClick} name="flight">Add Flight</Button>
          </Col>
          <Col>
            <Button onClick={this._onClick} name="hotel">Add Hotel</Button>
          </Col>
          <Col>
            <Button onClick={this._onClick} name="car">Add Rental Car</Button>
          </Col>
          <Col>
            <Button onClick={this._onClick} name="custom">Add Custom</Button>
          </Col>
        </Row>

        <Row>
          {ActivityList}
        </Row>
      </Container>
    )
  }
}

export default ViewTrip