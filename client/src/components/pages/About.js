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
          <h2> Taylor's Story</h2>
          <p>
            I'm a recent graduate from 
            Massachusetts  Institute of Technology (MIT). Since graduating in June 2021
             with a B.S. in Computer Science and Molecular Biology, I've been working on my keyboard app. 
             Visit the Projects page to learn more about the RightDvorak keyboard app.
          </p>

          <p>
               I started my MIT career in 2012, fresh out of high school. While jogging with my roommate  in 
               the Spring of 2014, when I was a sophomore, 
               I suffered an out-of-hospital cardiac arrest. As a result, I acquired  an anoxic brain injury. 
               (This means that my brain was damaged due to lack of oxygen- because my heart stopped.)
               After spending about a month in a coma at Massachusetts  General Hospital,
                I was transferred  to Craig Rehabilitation Hospital in Colorado. While there, I relearned how to 
                speak, eat, and began relearning how to walk.
               You can read more about my journey and recovery <a href="http://taylorisperfect.org/">here</a>.
          </p>

          <p>
               Obviously, during this time I had to be withdrawn from school.
               I have since relearned how to walk and regained countless other skills. 
               My injury left me with deficits in both vision and motor control.
                However, I continue to improve every day.
          </p>

          <p>
               I fully returned to MIT in 2017. Since then, I have been 
               working hard to complete my degree, which is in Computer Science and Molecular  Biology. 
               Before my injury, I had extensive experience in multiple biology labs, where I worked
                throughout high school 
               and my first three semesters of college. After my injury, I can no longer work in a wet lab.
                However, my first passion was biology, and I couldn't bear to cut it from my life. I enjoyed
                 my biology coursework at MIT, and was inspired by the excellent faculty- in all of my classes.
                I finally finished my degree this June!
          </p>

          <p>
               I enjoy contemporary art. My favorite style is pop surrealism. I love exploring the city and discovering quaint, cozy coffee shops.
               I also keep composting worms.
          </p>
          </>
    );
  }
}

export default About;
