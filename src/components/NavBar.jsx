import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand" to="/#">
          VIDLY
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link  " to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-item nav-link " to="/costumers">
              Costumers
            </NavLink>
            <NavLink className="nav-item nav-link " to="/rentals">
              Rentals
            </NavLink>
            <NavLink className="nav-item nav-link " to="/login">
              login
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
