import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js"
import Resume from "./pages/Resume.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";
import SideBar from "./modules/SideBar.js";

import "../utilities.css";
import "../components/modules/SideBar.css"

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

  }

  render() {
    return (
      <>
      <SideBar 
      />
      <div className="main">
        <Router>
          <Home
            path="/"  
          />
          <About
          path="/about"
          />
          <Resume
          path="/resume"
          />
          <Projects
          path="/projects"
          />
          <Contact
          path="/contact"
          />
          <NotFound default />
        </Router>
        </div>
      </>
    );
  }
}

export default App;
