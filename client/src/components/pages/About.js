import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";

class About extends Component {
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
          
          <h1>TAYLOR <br></br>SHAW</h1>
          <h2> About Page</h2>
          </>
    );
  }
}

export default About;
