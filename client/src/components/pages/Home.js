import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";
import logo from "../../../dist/shophammer.png"

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
        
        <h1>Welcome to Taylor Shaw's personal website</h1>
      <h2>This is where I blog about what's happening in my code shop.</h2>
       
        <img src={logo} alt="Logo image of a storefront with a large capital T. The T is reminiscent of the Xcode logo." />
        <h2> Please explore!</h2>
      </>
    );
  }
}

export default Home;
