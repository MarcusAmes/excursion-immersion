import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class UserBubble extends Component {
  _onLogout = () => {
    this.props.logout(this.props.history) 
  }
  render() {
    
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Account
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag={Link} to="/home">
              Home 
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={this._onLogout}>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
}

export default withRouter(UserBubble)