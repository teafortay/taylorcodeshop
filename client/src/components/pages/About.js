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
          <h2> About Page</h2>
          <p>Hi, my name is Taylor Shaw. I'm a recent graduate from the 
            Massachusettes Institute of Technology (MIT).I graduated in June 2021
             with a B.S. Degree in Computer Science and Molecular Biology.</p>

             <p>I started my MIT career in 2012. While I was a sophomore, in 2014,
               I suffered an out-of-hospital cardiac arrest while jogging with my 
               roomate. As a result, I aquired an anoxic brain injury. I was in
               a coma at MGH for about a month. Obviously, I had to be withdrawn from school.
               You can read more about my injury and recovery <a href="http://taylorisperfect.org/">here</a>.
               I have since recovered. However, my skills are not fully back
               to where they were pre injury. I continue to improve every day.
             </p>

             <p>
               I fully returned to MIT in 2017. Since then, I have been 
               working hard to complete my degree. I finally finished it this June!
             </p>

             <p>
               I enjoy contemporary art and coffee shops. I love exploring the city!
               Also, I have composting worms.
             </p>
          </>
    );
  }
}

export default About;
