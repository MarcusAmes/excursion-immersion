import React, { Component } from 'react'
import ActivityIcon from './ActivityIcon';
import moment from 'moment'
import EditButtonContainer from '../containers/EditButtonContainer';
import { Collapse, ListGroupItem, Row, Col, Container } from 'reactstrap'

class Activity extends Component {
  state = {
    collapse: false
  }
  toggle = () => {
    this.setState({ collapse: !this.state.collapse })
  }
  render() {
    const border = this.state.collapse ? "none" : "1px solid lightgrey"
    return (
      <div>
        <div style={{cursor: "pointer"}}>
          <ListGroupItem onClick={this.toggle} style={{borderBottom: border, display: "flex", alignItems: "center"}}>
            <ActivityIcon type={this.props.activity.type}/>
            <Container>
              <Row style={{marginLeft: "5px"}}>
                <Col>
                  <h3>{this.props.activity.name}</h3>
                </Col>
                <Col>
                  <h3>{moment(this.props.activity.start).format('ddd, MMM D')}</h3>
                </Col>
                <Col>
                  <h3>{moment(this.props.activity.start).format('LT')}</h3>
                </Col>
              </Row>
            </Container>
          </ListGroupItem>
          <div style={{display: "flex", justifyContent: "flex-end", position: "relative", bottom: "68px", right: "2px", height: "0px", zIndex: "100"}}>
            <EditButtonContainer type="activity" id={this.props.activity.id} />
          </div>
        </div>
        <Collapse isOpen={this.state.collapse} onClick={this.toggle}>
          <div style={
            {
              display: "flex",
              justifyContent: "space-between",
              padding: "6px",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              borderLeft: "1px solid lightgrey",
              borderRight: "1px solid lightgrey",
              borderBottom: "1px solid lightgrey",
              marginBottom: "3px",
              cursor: "pointer" 
            }
          }>
            <div style={{display: "flex", alignItems: "center"}}>
              <div style={{marginLeft: "10px"}}>
                <h4>{`${moment(this.props.activity.start).format('LT')} ${this.props.activity.end ? moment(this.props.activity.end).format('- LT') : ""}`}</h4>
                <h4>{this.props.activity.address}</h4>
              </div>
            </div>
          </div>
          {false && <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{height: "12px", width: "12px", backgroundColor: "grey", borderRadius: "50%", opacity: "1", margin: "10px"}}>
            </div>
          </div>}
        </Collapse>
      </div>
    )
  }

}

export default Activity