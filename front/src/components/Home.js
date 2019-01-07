import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Home extends Component {
  render() {

    if(!this.props.loggedIn) {
      return <Redirect to = "/" />
    }
    
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default Home