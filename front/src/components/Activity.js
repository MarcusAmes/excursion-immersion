import React from 'react'
import ActivityIcon from './ActivityIcon';
import moment from 'moment'
import { Col } from 'reactstrap'

function Activity(props) {
  console.log(moment().format());
  
  return (
    <Col xl="12">
      <div style={{display: "flex"}}>
        <ActivityIcon type={props.activity.type}/>
        <div style={{marginLeft: "10px"}}>
          <h3>-{props.activity.title}</h3>
          <h4>{moment(props.activity.start).format('ddd, MMM D')}</h4>
          <h4>{`${moment(props.activity.start).format('LT')} ${props.activity.end ? moment(props.activity.end).format('- LT') : ""}`}</h4>
        </div>
      </div>
      <div style={{height: "40px", width: "12px",backgroundColor: "grey", borderRadius: "10px", opacity: "1", margin: "10px", marginLeft: "44px"}}>

      </div>
    </Col>
  )
}

export default Activity