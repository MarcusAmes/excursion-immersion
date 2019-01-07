import React, {Component} from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  Form,
  Button,
  Input
} from 'reactstrap';

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
  }

  render(){

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Travel Planner</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Form onSubmit={this._onSubmit}>
              <Input onChange={this._onChange} value={this.state.email} name="email" type='text' placeholder='email' />{' '}
              <Input onChange={this._onChange} value={this.state.password} name="password" type='text' placeholder='password' />{' '}
              <Button type='submit'>Sign in</Button>            
            </Form>
          </Nav>
      </Navbar>
    )
  }
}

export default TopNav