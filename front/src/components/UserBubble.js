import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink
} from 'reactstrap';

class UserBubble extends Component {
  _onLogout = () => {
    this.props.logout(this.props.history) 
  }
  render() {
    
    return (
      <>
        <NavItem>
          <NavLink tag={Link} to='/home'>Home</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Account
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={this._onLogout}>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    )
  }
}

export default withRouter(UserBubble)