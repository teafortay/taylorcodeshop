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
          <h2> Current projects:</h2>
          <ul>

          <li className="Text-medfont">This Website!</li>
          <p>
            - View the github <a href="https://github.com/teafortay/taylorcodeshop"> repo</a>.
          </p>
          <li className="Text-medfont">Various iOS Apps</li>
          <p>
            I have a couple iOS app products in the works. I'm using The Composable Architecture (TCA) framework, 
            and Firebase for authentication and database management. These projects are in private github repos.
          </p>
          <li className="Text-medfont">The Right Dvorak</li>
          <p>
            I use the Dvorak-Right-Handed keyboard, instead of the QWERTY
             keyboard layout. TheRightDvorak is an iOS app that allows me to use the 
             Dvorak-Right-Handed 
             keyboard on my iPad and iPhone. I wrote the app in swift, using UIKit, over the 
             course of 2 years. This was my first iOS app!
             The app launched to the AppS tore in 
             August 2020. 
             I continue to release updates and make improvements. In my latest update, I added sound and haptics.
             <br></br>
             - View the github <a href="https://github.com/teafortay/tayboard">repo</a>.
             <br></br>
             - Download the <a href="https://apps.apple.com/us/app/the-right-dvorak/id1527312974">app</a>.
          </p>
        </ul>
        <h2>Previous projects:</h2>
        <ul>
          <li className="Text-medfont">MITopoly</li>
          <p>
            As part of MIT's web-lab class (6.148), I built a website to 
            play a monopoly-like game. The class met over January 2021.
            I learned how to build websites using HTML, CSS, Javascript,
            and React for the front end. For the back end, we used Express.js,
            Mongoose, and MongoDB.We leveraged Google Login/ Logout for account verification. 
            We connected front and back wwith sockets.
            <br></br>
            - View the github 
            <a href="https://github.com/teafortay/webLabProj"> repo</a>. 
            <br></br>
            - Checkout the 
            <a href="https://boardwithfriends.herokuapp.com"> website</a>.
          </p>
          <li className="Text-medfont">Xplain my Xray</li>
          <p>
            For another class (6.UAT), I designed and built a mock-up of an
             iOS app. The assignment was to propose a technical project.
              We proposed an iOS app for medical applications.
              I demoed a prototype. 
              <br></br>
              - View the github 
              <a href="https://github.com/teafortay/proposalTalk"> repo</a>. 
          </p>
        </ul>
          </>
    );
  }
}

export default Projects;
