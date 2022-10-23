import "./home.css";
import React from "react";
import Banner from "../../component/Banner/Banner";
import SectionHeading from "../../component/SectionHeading/SectionHeading";
import List from "../../component/List/List";

export default function home() {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section className="upcoming-shows">
        <SectionHeading heading={"heading"} subheading={"Sub Heading"} />
        <List />
      </section>
    </>
  );
}
