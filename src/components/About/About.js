import React, { Component } from 'react';
import './style.scss';

import about from './../../images/about-img.png';


class About extends Component {
  render() {
    return (
      <div className="about" id="About">
        <div className="about-text">
          <h3>About</h3>
          <h1>Myrian Katto</h1>
          <p>
            After working with graphic design for about ten years, I decided to change my career to
            something more challenging. I just graduated from an intensive Full Stack Web
            Development bootcamp and now I'm looking forward to putting all this new knowledge in
            practice combined with my design skills. I’m looking for an opportunity in the tech
            industry where I can continue learning, collaborating, creating and developing new great
            innovative solutions for the world.{' '}
          </p>
        </div>
        <div className="about-image"><img src={about} alt="Myrian Katto"/></div>
      </div>
    );
  }
}

export default About;
