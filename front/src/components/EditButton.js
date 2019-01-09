import React, { Component } from 'react'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const style = {
  color: "black",
  display: "flex",
  alignItems: "center",
  height: "7px",
  width: "7px",
  margin: "0",
  padding: "0"
}

class EditButton extends Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  _onDelete = () => {
    if(this.props.type === "activity") {
      this.props.removeActivity(this.props.id)
    } else if (this.props.type === "trip") {
      this.props.removeTrip(this.props.id)
    }
  }

  _onEdit = () => {

  }

  render() {
    
    return (
      <ButtonDropdown style={{width: "30px", height: "30px"}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle style={{borderRadius: "5px", height: "100%", width: "100%", backgroundColor: "transparent", border: "none", padding: "0"}}>
          <div style={{height: "100%", width: "100%", borderRadius: "5px", display: "flex", justifyContent: "center", backgroundColor: `${this.props.type === "activity" ? "transparent" : "grey" }`, opacity: ".5"}}>
            <div>
              <div style={style}>.</div>
              <div style={style}>.</div>
              <div style={style}>.</div>
            </div>
          </div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this._onEdit}>Edit</DropdownItem>
          <DropdownItem onClick={this._onDelete} style={{color: "red"}}>Delete</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}

export default EditButton