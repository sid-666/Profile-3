import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function About() {
  return (
    <div>
      <div class="row column">
        <br></br>
        <h3>About Me</h3>
        <img class="thumbnail" src="profilepic.PNG"></img>
        <h5>Siddharth Dhananjay</h5>
        <p>I am a second year student at Deakin University studying Commerce and Business Analytics, and going to be
          majoring in Finance. I aspire to become a Business Analyst and work in a challenging and fulfilling business
          environment. Demonstrated communication skills, strong work ethic and time management during my time
          learning music under Laya Vidhya school of music as well helping in organizing events. I am a great team
          worker and a problem solver as well and I have a deep desire to be part of the work force and develop
          myself.</p>
        <a href="https://www.linkedin.com/in/siddharth-dhananjay-b1075919b/">linkedin</a>
        <br></br>
        <a href="Resume.pdf">Resume</a>
      </div>
    </div>
  );
}

export default About;
