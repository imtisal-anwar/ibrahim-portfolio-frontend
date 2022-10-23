import React from "react";
import { MusicIcon } from "../Icons/Icons";
import "../Logo/Logo.css";

export default function Logo(props) {
  let fullClass = props.classes + " d-flex align-items-center logo";
  return (
    <div className={fullClass}>
      <MusicIcon width={"44"} height={"38"} />
      <span>Ibrahim Qazi</span>
    </div>
  );
}
