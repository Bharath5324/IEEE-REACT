import React from 'react';
import Missionvision from './Missionvision.js'
import About from './About.js'
import Carousel from './Carousel/Carousel.js'
import Testimonial from './Carousel/Testimonial.js'
import Intro from './Intro/Intro.js'
import 'materialize-css/dist/css/materialize.min.css';

const Landing = props =>{
  return (
    <div className="landing">
      <div className="intro"><Intro/></div>
      <div className="mission"><Missionvision/></div>
      <div className="about"><About/></div>
      <div className="carousel"><Carousel/></div>
       <div className="testimonial"><Testimonial/></div>

    </div>
  );
}

export default Landing;
