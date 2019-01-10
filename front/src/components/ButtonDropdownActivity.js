import React, { Component } from 'react'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class ButtonDropdownActivity extends Component {

  state = {
    dropdownOpen: false
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    
    return (
      <div style={{ width: "100%" }}>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle style={{borderRadius: "4px", width: "310px"}} color="danger" inverse>
            Add Activity +
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem name="flight" onClick={this.props.toggleModal}>Add Flight</DropdownItem>
            <DropdownItem name="hotel" onClick={this.props.toggleModal}>Add Hotel</DropdownItem>
            <DropdownItem name="car" onClick={this.props.toggleModal}>Add Car</DropdownItem>
            <DropdownItem name="business" onClick={this.props.toggleModal}>Add Business Meeting</DropdownItem>
            <DropdownItem name="custom" onClick={this.props.toggleModal}>Add Custom</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    )
  }
}

export default ButtonDropdownActivity