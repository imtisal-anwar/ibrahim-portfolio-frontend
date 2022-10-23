import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import HeaderConfig from "./HeaderConfig";
import SocialIcon from "../SocialIcon/SocialIcon";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header>
      <div className="row g-0 p-2">
        <div className="col-2 m-auto text-start">
          <NavLink className="navbar-brand" to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="col-8 m-auto ">
          <nav className="navbar navbar-expand-lg navbar-center">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul className="navbar-nav ">
                  {HeaderConfig.navItem.map((navItem) => (
                    <li className="nav-item" key={navItem.id}>
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to={navItem.path}
                      >
                        {navItem.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-2 m-auto text-end">
          <SocialIcon />
        </div>
      </div>
    </header>
  );
}
