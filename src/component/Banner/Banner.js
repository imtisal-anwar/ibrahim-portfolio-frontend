import React from "react";
import "../Banner/Banner.css";
import BorderBtn from "../Button/BorderBtn/BorderBtn";
import WhiteBtn from "../Button/WhiteBtn/WhiteBtn";

export default function Banner() {
  return (
    <div className="banner">
      <div className="row g-0 align-items-center">
        <div className="col-12 text-center">
          <h1>
            WE
            <br />
            BRING
            <br />
            THE
            <br />
            NOIZE
          </h1>
        </div>
      </div>
      <div className="row g-0 ">
        <div className="col-6 text-end ">
          <BorderBtn classes={"me-2"} text={"Play Video"} />
        </div>
        <div className="col-6 text-start ">
          <WhiteBtn classes={"ms-2"} text={"Buy Album"} />
        </div>
      </div>
    </div>
  );
}
