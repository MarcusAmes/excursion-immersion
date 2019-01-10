import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class Splash extends Component {
  render() {
    
    return (
      <div style={{height: "92%"}}>
        <div style={{height: "100%"}}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <h1 style={{position: "relative", top: "5px", height: "0", margin: "0", color: "white", fontFamily: "Staatliches", fontSize: "8em"}}>ELEVATE YOUR ADVENTURE</h1>
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <h1 style={{position: "relative", top: "150px", height: "0", margin: "0", color: "white", fontFamily: "Staatliches", fontSize: "3em"}}>START PLANNING WITH EXCURSION IMMERSION TODAY</h1>
          </div>
          <div style={{width: "100%", height: "100%", overflow: "hidden"}}>
            <img style={{width: "100%", height: "100%"}} src="https://www.iconspng.com/images/forrest-and-mountains-illustration/forrest-and-mountains-illustration.jpg" alt=""/>
          </div>
          <div style={{display: "flex", justifyContent: "center", position: "relative", bottom: "200px"}}>   
            <Button color="info" ><Link style={{textDecoration: "none", color: "white"}} to='register'>Get Started</Link></Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash