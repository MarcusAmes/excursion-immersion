import React, { Component } from 'react'
import ActivityIcon from './ActivityIcon';
import moment from 'moment'
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
  margin: "0",
  padding: "0"
}

class Activity extends Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  _onDelete = () => {
    this.props.removeActivity(this.props.activity.id)
  }

  render() {
    return (
      <div>
        <div style={{display: "flex", justifyContent: "space-between", boxShadow: "3px 3px 10px black", padding: "4px", borderRadius: "10px"}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <ActivityIcon type={this.props.activity.type}/>
            <div style={{marginLeft: "10px"}}>
              <h3>{this.props.activity.name}</h3>
              <h4>{moment(this.props.activity.start).format('ddd, MMM D')}</h4>
              <h4>{`${moment(this.props.activity.start).format('LT')} ${this.props.activity.end ? moment(this.props.activity.end).format('- LT') : ""}`}</h4>
            </div>
          </div>
          <div>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle style={{backgroundColor: "white", border: "none", borderRadius: "5px"}}>
                <div style={style}>.</div>
                <div style={style}>.</div>
                <div style={style}>.</div>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem onClick={this._onDelete} style={{color: "red"}}>Delete</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <div style={{height: "40px", width: "12px", backgroundColor: "grey", borderRadius: "10px", opacity: "1", margin: "10px"}}>

          </div>
        </div>
      </div>
    )
  }

}

export default Activity