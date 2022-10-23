import React from "react";
import BorderBtn from "../Button/BorderBtn/BorderBtn";
import "../List/List.css";

export default function List() {
  return (
    <div className="list row">
      <div className="col-3">
        <div>Mon, Jan 27</div>
      </div>
      <div className="col-6">
        <div className="full-width">
          <div className="row">
            <div className="col-6">HALLEN STADION</div>
            <div className="col-6">ZURICH, SWITZERLAND</div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div>
          <BorderBtn text={"buy tickets"} />
        </div>
      </div>
    </div>
  );
}
