import React from 'react'
import ActivityIcon from './ActivityIcon';
import moment from 'moment'

function Activity(props) {
  console.log(props);
  
  return (
    <div>
      <div style={{display: "flex"}}>
        <ActivityIcon type={props.activity.type}/>
        <h2>-{props.activity.title}</h2>
        <h3>{moment(props.activity.start).format('llll')}</h3>
      </div>

    </div>
  )
}

export default Activity