// components/About.js
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="overlay"></div> {/* Overlay div */}
      <h2>About Me</h2>
      <p>
        Hi, I'm Ananyashree K G, a passionate Computer Science student at Nagarjuna College of Engineering and Technology. 
        With a strong foundation in programming and a keen interest in artificial intelligence and machine learning, I strive to explore innovative solutions that make a difference. 
      </p>
      <p>
        I have had the opportunity to work on several projects, including Human Activity Recognition using deep learning and a Personalized News Aggregator. 
        These experiences have not only honed my technical skills but also ignited my passion for transforming ideas into reality.
      </p>
      <p>
        I enjoy learning new things in this quickly changing field. In my free time, I like to take part in coding competitions and work on open-source projects. 
        I'm excited to meet others who share my interests and find new opportunities in technology.
      </p>
    </div>
  );
}

export default About;
