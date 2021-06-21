import React, { Component } from "react";
import { Link } from "@reach/router";
import "./SideBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        /*
        <div class="sidenav">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div>
        */
        
      <div className="SideNav">
        <div className="SideNav-pretitle">from the desk of</div>
        <div className="SideNav-title">TAYLOR SHAW</div>
        
        <div>
          <Link to="/" className="SideNav-a">
            Home
          </Link>
          <Link to="/about" className="SideNav-a">
            About
          </Link>
          <Link to="/resume" className="SideNav-a">
            Resume
          </Link>
          <Link to="/projects" className="SideNav-a">
            Projects
          </Link>
          <Link to="/contact" className="SideNav-a">
            Contact
          </Link>
           
        </div>
      </div>
    );
  }
}

export default SideBar;