import React from 'react';
import './style.scss';

import frontend from './../../images/domain.svg';
import backend from './../../images/script.svg';
import design from './../../images/desktop.svg';
import tool from './../../images/settings.svg';

function Skills() {
  return (
    <div className="technologies" id="Tech Skills">
      <div className="technologies-title" data-aos="fade-down">
        <h1>Tech Skills</h1>
        <p>Some of the technologies I've worked with</p>
      </div>
      <div className="technologies-container" data-aos="fade-up">
        <div className="technologies-column" >
<img src={frontend} alt="Front End"/>

<h6>FRONT END</h6>
    
          <ul>
            <li>React.Js</li>
            <li>Javascript ES6</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="technologies-column">
        <img src={backend} alt="Back End"/>
          <h6>BACK END</h6>
          <ul>
            <li>Node.Js</li>
            <li>Express</li>
            <li>RestAPI</li>
            <li>MongoDB</li>
            <li>Handlebars</li>
          </ul>
        </div>

        <div className="technologies-column" >
        <img src={design} alt="Design"/>

          <h6>DESIGN</h6>
          <ul>
            <li>Sketch</li>
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Ilustrattor</li>
            <li>Indesign</li>
          </ul>
        </div>
        <div className="technologies-column" >
        <img src={tool} alt="Aditional Tools"/>

          <h6>ADDITIONAL TOOLS</h6>
          <ul>
            <li>Github</li>
            <li>Heroku | Netlify</li>
            <li>NPM</li>
            <li>Jasmine</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
