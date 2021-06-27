import React, { Component } from "react";
import { Link } from "@reach/router";


import "../../utilities.css";
import "./Home.css";

class Resume extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {};
    }
  
    componentDidMount() {
      // remember -- api calls go here!
    }
  
    render() {
      return (
        <>
          <h2> Resume Page</h2>
          <Link to="resume6-26-21.pdf">click here for resume</Link>
          </>
    );
  }
}

export default Resume;
