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
          <li className="Text-medfont">this website!</li>
          <li className="Text-medfont">The Right Dvorak:</li>
          <p>
            I use the Dvorak-Right-Handed keyboard, instead of the QWERTY
             keyboard. TheRightDvorak is an iOS app that allows me to use the Dvorak-Right-Handed 
             keyboard on my iPad and iPhone.I launched the app August 2020, and 
             am planning to release the second version, with totally new 
             architecture this summer/ fall.
             View the github <a href="https://github.com/teafortay/tayboard">repo</a>, or 
             download the <a>app</a>.
          </p>
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
