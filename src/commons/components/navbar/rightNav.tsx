import React from "react";
import "./nav.css";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const RightNav = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <header className="bottomborder">
      <img src={logo} alt="logo" width={"150px"} height={"50px"}></img>
      <nav>
        <div className="menu-icon">
          <i
            className="fa fa-bars menu"
            aria-hidden="true"
            onClick={showMenu}
          ></i>
        </div>
        <section className={active ? "slider active" : "slider"}>
          <ul id="menu">
            <div className="closed">
              <i
                className="fa fa-times close"
                aria-hidden="true"
                onClick={showMenu}
              ></i>
            </div>
            <li>
              <NavLink className="link" to="little-lemon-restaurant">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="little-lemon-restaurant/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="little-lemon-restaurant/menu">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                to="little-lemon-restaurant/reservation"
              >
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="little-lemon-restaurant/login">
                Login
              </NavLink>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export { RightNav };
