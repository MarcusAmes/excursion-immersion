import React, {Component} from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  Form,
  Button,
  Input
} from 'reactstrap';
import UserBubble from './UserBubble';
import { Link } from 'react-router-dom'

class TopNav extends Component{

  state = {
    email: "",
    password: ""
  }

  _onChange = ({target}) => {
    this.setState({[target.name]: target.value})
  }

  _onSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state, this.props.history)
  }

  render(){
    return (
      <Navbar color="warning" light expand="md">
        <NavbarBrand tag={Link} to="/" >Travel Planner</NavbarBrand>
          <Nav className="ml-auto" navbar>
            {this.props.loggedIn ?
              <UserBubble />
            :
              <Form onSubmit={this._onSubmit}>
                {this.props.loginError && <p>Email and/or password is incorrect</p>}
                <Input onChange={this._onChange} value={this.state.email} name="email" type='email' placeholder='email' />
                <Input onChange={this._onChange} value={this.state.password} name="password" type='password' placeholder='password' />
                <Button type='submit'>Sign in</Button>            
              </Form>}
          </Nav>
      </Navbar>
    )
  }
}

export default TopNav