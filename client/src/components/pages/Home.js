import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";

class Home extends Component {
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
        
        <h1>Welcome to Taylor Shaww's personal website</h1>
      <h2>This is where I blog about what's happennng in my code shop.</h2>
        <h2> Please explore!</h2>
        <ul>
          
          <li>Add a favicon to your website at the path client/dist/favicon.ico</li>
        </ul>
      </>
    );
  }
}

export default Home;
