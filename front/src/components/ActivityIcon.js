import React from 'react'
import {
  FaPlane,
  FaCar,
  FaBriefcase,
  FaHotel,
  FaClock
} from "react-icons/fa";

const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    backgroundColor: "grey"
}

function ActivityIcon(props) {
  let icon;
  switch (props.type) {
    case "flight":
      icon = <FaPlane size="4em" color="white"/>
      break;
    case "car":
      icon = <FaCar size="4em" color="white"/>
      break;
    case "business":
      icon = <FaBriefcase size="4em" color="white"/>
      break;
    case "hotel":
      icon = <FaHotel size="4em" color="white"/>
      break;
    default:
      icon = <FaClock size="4em" color="white"/>;
      break;
  }
  return (
    <div style={style}>
      {icon}
    </div>
  )
}

export default ActivityIcon