import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.scss';

import about from './../../images/about-img-lg1.png';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="about" id="About">
      <div className="about-text">
        <div data-aos="fade-down">
          <h3>About</h3>
          <h1>Hi, I'm Myrian.</h1>
          <p>
            I'm a Japanese-Brazilian Front-End developer 👩‍💻 starting a new career path. I strongly
            believe in human-centered development and design and I’m curious about the whole visual
            part of the web, mainly its usability and accessibility. I want to make the web easy to
            use, beautiful, accessible to all. I worked as a Graphic Designer for the past 8 years
            and I'm sure that having experience in both design and development will help me me to
            achieve my goals building great projects and amazing user experiences. I always try to
            go the extra mile wherever possible and I'm always looking for new technologies to
            develop creative solutions, create incredible UI effects, animations and build
            intuitive, dynamic user experiences. In my free time you can find me enjoying the beach
            🏖 in Florianópolis - Brazil, traveling somewhere around the globe or cuddling my two
            lovely cats 🐈.
          </p>
        </div>
      </div>
      <div className="about-image" data-aos="fade">
        <img src={about} alt="Myrian Katto" />
      </div>
    </div>
  );
};

export default About;
