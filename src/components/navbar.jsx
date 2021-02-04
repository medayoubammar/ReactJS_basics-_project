import React, { Component } from "react";

const Navbar = ({ TotaleNumbers }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Numbers of positive counters
          <span className="badge badge-primary m-2">{TotaleNumbers}</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;


