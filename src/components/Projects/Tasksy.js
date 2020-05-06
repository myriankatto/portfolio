import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import tasksy from './../../images/img-tasksy.png';
import github from './../../images/ic-navbar-github.svg';

import { Icon } from 'react-icons-kit';
import { arrows_slim_right } from 'react-icons-kit/linea/arrows_slim_right';

//Icons

import react from './../../images/react.svg'
import mongodb from './../../images/mongodb.svg'
import express from './../../images/expressjs-icon.svg'
import node from './../../images/nodejs-icon.svg'
import sass from './../../images/sass-1.svg'
import api from './../../images/api.svg'

function Tasksy() {
  return (
    <div className="project" id="Projects">
      <div className="project-content">
        <h1>Tasksy</h1>
        <p>
          It is an app that helps people to improve their work environment! It was developed to
          assist teams to list all the tasks that needs to be done at their workspaces, so everyone
          can collaborate to keep it clean and nice. Tasksy uses the gamification methodology and
          everyone will be rewarded for the great job done!
        </p>
        <div className="content-btn">
          <Link to="https://github.com/myriankatto/ironhack-project3" target="_blank">
            <div className="github-btn">
              <img src={github} alt="github" /> <span>Github</span>
            </div>
          </Link>
          <Link to="https://tasksyapp.herokuapp.com/" target="_blank">
            <div className="project-btn">
              <span>See Project</span>
              <Icon icon={arrows_slim_right} size={35} />
            </div>
          </Link>
        </div>
        <div className="content-icons">
          <span>Developed with</span>
          <div className="icons">
          <span tooltip="ReactJs" flow="down"><img src={react} style={{width:'2.4em'}} alt="React.js" /></span>
          <span tooltip="NodeJs" flow="down"><img src={node} style={{width:'2em'}} alt="Node.js" /></span>
          <span tooltip="Mongo DB" flow="down"><img src={mongodb} style={{width:'8.5em'}} alt="Mongodb" /></span>
          <span tooltip="Express.js" flow="down"><img src={express} style={{width:'2.2em'}} alt="Express.js" /></span>
          <span tooltip="Rest API" flow="down"><img src={api} style={{width:'2.2em'}} alt="Rest API" /></span>
          <span tooltip="Sass" flow="down"><img src={sass} style={{width:'2.2em'}} alt="Sass" /></span>
          </div>
        </div>
      </div>
      <div className="project-image">
        <img src={tasksy} alt="Myrian Katto" />
      </div>
    </div>
  );
}

export default Tasksy;
