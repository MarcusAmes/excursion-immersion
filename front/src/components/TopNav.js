import React, {Component} from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  Form,
  Button,
  Input,
  FormGroup,
  Col
} from 'reactstrap';
import { Link } from 'react-router-dom'
import UserBubbleContainer from '../containers/UserBubbleContainer';

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
              <UserBubbleContainer />
            :
              <Form onSubmit={this._onSubmit} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                {this.props.loginError && <p>Email and/or password is incorrect</p>}
                <FormGroup row style={{marginBottom: "0"}}>
                  <Col>
                    <Input onChange={this._onChange} value={this.state.email} name="email" type='email' placeholder='email' />
                  </Col>
                  <Col>
                    <Input onChange={this._onChange} value={this.state.password} name="password" type='password' placeholder='password' />
                  </Col>
                  <Col>
                    <Button type='submit'>Sign in</Button>            
                  </Col>
                </FormGroup>
              </Form>}
          </Nav>
      </Navbar>
    )
  }
}

export default TopNav