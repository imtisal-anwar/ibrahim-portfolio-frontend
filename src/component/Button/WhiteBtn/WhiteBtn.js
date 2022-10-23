import React from "react";
import "../WhiteBtn/WhiteBtn.css";

export default function WhiteBtn(props) {
  let fullClass = props.classes + " white-btn";
  return <button className={fullClass}>{props.text}</button>;
}
