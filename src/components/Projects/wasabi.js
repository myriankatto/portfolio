import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.scss';
import { Link } from 'react-router-dom';
import wasabi from './../../images/img-wasabi.png';
import github from './../../images/ic-navbar-github.svg';

import { Icon } from 'react-icons-kit';
import { arrows_slim_right } from 'react-icons-kit/linea/arrows_slim_right';

//Icons

import javascript from './../../images/javascript.svg';
import html from './../../images/html-5.svg';
import css from './../../images/css3.svg';

const Wasabi = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="project">
      <div className="project-content" data-aos="fade-down">
        <h1>Don't Feed Wasabi</h1>
        <p>
          2D game developed in Javascript. It was developed as a tribute to the most wonderful cat
          on earth. Avoid the salmons, so it doesn't get too fat, get all the hearts to win the
          game.
        </p>
        <div className="content-btn">
          <a href="https://github.com/myriankatto/project-1" target="_blank" rel="noopener noreferrer">
            <div className="github-btn">
              <img src={github} alt="github" /> <span>Github</span>
            </div>
          </a>
          <a href="https://github.com/myriankatto/project-1" target="_blank" rel="noopener noreferrer">
            <div className="project-btn">
              <span>See Project</span>
              <Icon icon={arrows_slim_right} size={35} />
            </div>
          </a>
        </div>
        <div className="content-icons">
          <span>Developed with</span>
          <div className="icons">
            <span tooltip="Javascript" flow="down">
              {' '}
              <img src={javascript} style={{ width: '3.2em' }} alt="javascript" />
            </span>
            <span tooltip="HTML 5" flow="down">
              {' '}
              <img src={html} style={{ width: '3em' }} alt="html5" />
            </span>
            <span tooltip="CSS 3" flow="down">
              {' '}
              <img src={css} style={{ width: '3em' }} alt="css3" />
            </span>
          </div>
        </div>
      </div>
      <div className="project-image" data-aos="fade-up">
        <img className="img-3" src={wasabi} alt="Myrian Katto" />
      </div>
    </div>
  );
};

export default Wasabi;
