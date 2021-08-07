import React, { Component } from "react";
import { Link } from "@reach/router";


import "../../utilities.css";
import "./Home.css";

class Contact extends Component {
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
          <h2> Contact</h2>
          <h4>cell: 310.seven.three.three.9232</h4>
          <h4>email: tay[AT]taylorcodeshop.com</h4>
          <h4>github: <a href="https://github.com/teafortay">teafortay</a></h4>
          <h4><a href="https://www.linkedin.com/in/taylor-shaw-a4864a7b/">LinkedIn</a></h4>
          <h4><a href="https://limeconnect-csm.symplicity.com/profiles/taylor.shaw">Lime Connect</a>, The Lime Network</h4>
          <h4><a href="https://www.figma.com/files/user/689237763430919796?fuid=689237763430919796">Figma</a></h4>
          </>
    );
  }
}

export default Contact;
