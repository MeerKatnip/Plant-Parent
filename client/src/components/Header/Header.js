import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component() {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <div className="row col-12 d-flex justify-content-center text-white">
            <span className="h3">Register</span>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
