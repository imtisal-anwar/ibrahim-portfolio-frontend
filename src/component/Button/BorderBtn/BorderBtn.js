import React from "react";
import "../BorderBtn/BorderBtn.css";

export default function BorderBtn(props) {
  let fullClass = props.classes + " border-btn";
  return <button className={fullClass}>{props.text}</button>;
}
