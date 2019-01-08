import React, { Component } from 'react'

class ViewTrip extends Component {

  componentDidMount() {
    this.props.fetchActivities(this.props.match.params.id)
  }

  render() { 
    if (this.props.activitiesLoading) {
      return <div>Loading...</div>
    }  
    
    return (
      <div>
        Hi
      </div>
    )
  }
}

export default ViewTrip