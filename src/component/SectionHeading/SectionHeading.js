import React from "react";
import { MusicIcon } from "../Icons/Icons";
import "../SectionHeading/SectionHeading.css";

export default function SectionHeading(props) {
  return (
    <div className="text-center py-4 section-heading">
      <MusicIcon width={"44"} height={"38"} />
      <h2 className="">{props.heading}</h2>
      <h3>{props.subheading}</h3>
    </div>
  );
}
