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
          <h2> My Resume</h2>
          <a href="/Taylor-Shaw.pdf">click here for resume</a>
          </>
    );
  }
}

export default Resume;
