import React, { Component } from 'react'
import ActivityIcon from './ActivityIcon';
import moment from 'moment'
import EditButtonContainer from '../containers/EditButtonContainer';

class Activity extends Component {
  render() {
    return (
      <div>
        <div style={{display: "flex", justifyContent: "space-between", boxShadow: "3px 3px 10px black", padding: "6px", borderRadius: "10px"}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <ActivityIcon type={this.props.activity.type}/>
            <div style={{marginLeft: "10px"}}>
              <h3>{this.props.activity.name}</h3>
              <h4>{moment(this.props.activity.start).format('ddd, MMM D')}</h4>
              <h4>{`${moment(this.props.activity.start).format('LT')} ${this.props.activity.end ? moment(this.props.activity.end).format('- LT') : ""}`}</h4>
            </div>
          </div>
          <div>
            <EditButtonContainer type="activity" id={this.props.activity.id} />
          </div>
        </div>
        {!this.props.last && <div style={{display: "flex", justifyContent: "center"}}>
          <div style={{height: "12px", width: "12px", backgroundColor: "grey", borderRadius: "50%", opacity: "1", margin: "10px"}}>
          </div>
        </div>}
      </div>
    )
  }

}

export default Activity