import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";

class Projects extends Component {
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
          <h3> Current projects:</h3>
          <ul>
          <li>this website!</li>
          <li>The Right Dvorak</li>
        </ul>
        <h3>Previous projects:</h3>
        <ul>
          <li>MITopoly</li>
          <li>Xplain my Xray</li>
        </ul>
          </>
    );
  }
}

export default Projects;
