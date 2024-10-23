import React from "react";
import "./footer.css";
import logo from "../../../assets/logo-footer.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="max-width">
          <div className="col-1">
            <img src={logo} alt="logo" width="80px" />
          </div>
          <div className="col-2">
            <h3>Useful links</h3>
            <ul className="footer-links">
              <li className="links">
                <NavLink className="link" to="little-lemon-app">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="little-lemon-app/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="little-lemon-app/menu">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="little-lemon-app/reservation">
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="little-lemon-app/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h3>Contact us</h3>
            <p>address...India</p>
          </div>
          <div className="col-4">
            <h3>Connect with us</h3>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
