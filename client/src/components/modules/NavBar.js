import React, { Component } from "react";
import { Link } from "@reach/router";
import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="NavBar-container">
        <div className="NavBar-title u-inlineBlock">TAYLOR SHAW</div>
        <div className="NavBar-linkContainer u-inlineBlock">
          <Link to="/" className="NavBar-link">
            Home
          </Link>
          <Link to="/about" className="NavBar-link">
            About
          </Link>
          <Link to="/resume" className="NavBar-link">
            Resume
          </Link>
          <Link to="/projects" className="NavBar-link">
            Projects
          </Link>
          <Link to="/contact" className="NavBar-link">
            Contact
          </Link>
          
        </div>
      </nav>
    );
  }
}

export default NavBar;