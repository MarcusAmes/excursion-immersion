import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class Splash extends Component {
  render() {
    
    return (
      <div>
        <Button color="info" ><Link style={{textDecoration: "none", color: "white"}} to='register'>Get Started</Link></Button>
      </div>
    )
  }
}

export default Splash