import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.scss';

import { Icon } from 'react-icons-kit';
import { arrows_slim_right } from 'react-icons-kit/linea/arrows_slim_right';

import github from './../../images/ic-navbar-github.svg';
import instagram from './../../images/ic-navbar-instagram.svg';
import linkedin from './../../images/ic-navbar-linkedin.svg';

const Contacts = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="contacts" id="Contacts">
      <div className="contacts-left" data-aos="fade-right">
        <div className="container">
          <h1>Get in touch:</h1>
          <h5>myriankatto@gmail.com</h5>
          <h5>+55 48 91178535</h5>
          <div className="icons">
            <a
              href="https://github.com/myriankatto"
              className="icons-svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>

            <a
              href="https://www.linkedin.com/in/myrian-katto-2792a921/"
              className="icons-svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/myrionn"
              className="icons-svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        <h6>Myrian Katto @ 2020</h6>
        </div>
      </div>
      <div className="contacts-right">
        <div className="container">
          <h2 data-aos="fade-down">Let's have a coffee?</h2>

          <a href="https://calendly.com/myriankatto" target="_blank" rel="noopener noreferrer">
            <div className="contacts-btn">
              <span>Schedule here </span>
              <Icon style={{ marginLeft: '1em' }} icon={arrows_slim_right} size={35} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
