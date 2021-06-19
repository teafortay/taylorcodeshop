import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js"

import "../utilities.css";

//import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      //userId: undefined,
    };
  }

  componentDidMount() {
/*     get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    }); */
  }

  render() {
    return (
      <>
        <Router>
          <Home
            path="/"  
          />
          <About
          path="/about"
          />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
