import React from 'react'
import {
  FaPlane,
  FaCar,
  FaBriefcase,
  FaHotel,
  FaCalendarCheck
} from "react-icons/fa";


function ActivityIcon(props) {
  let style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
      width: "100px",
      borderRadius: "50%",
      backgroundColor: "grey"
  }

  let icon;
  switch (props.type) {
    case "flight":
      style.backgroundColor = "lightBlue"
      icon = <FaPlane size="4em" color="white"/>
      break;
    case "car":
      style.backgroundColor = "red"
      icon = <FaCar size="4em" color="white"/>
      break;
    case "business":
      style.backgroundColor = "black"
      icon = <FaBriefcase size="4em" color="white"/>
      break;
    case "hotel":
      style.backgroundColor = "lightGreen"
      icon = <FaHotel size="4em" color="white"/>
      break;
    default:
      icon = <FaCalendarCheck size="4em" color="white"/>;
      break;
  }
  return (
    <div style={style}>
      {icon}
    </div>
  )
}

export default ActivityIcon