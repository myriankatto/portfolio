import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.scss';
import wasabi from './../../images/img-wasabi.png';

import { Icon } from 'react-icons-kit';
import { arrows_slim_right } from 'react-icons-kit/linea/arrows_slim_right';
import {github} from 'react-icons-kit/icomoon/github'

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
          Jogo 2D desenvolvido em Javascript. Foi desenvolvido como uma homenagem ao gato mais
          maravilhoso na terra. Evite os salmões, para que não ela não coma demais e entre em sono
          profundo, colete todos os corações para ganhar o jogo.
        </p>
        <div className="content-btn">
          <a
            href="https://github.com/myriankatto/project-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="github-btn">
            <Icon icon={github} size={20} /><span>Github</span>
            </div>
          </a>
          <a
            href="https://github.com/myriankatto/project-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-btn">
              <span>Ver projeto</span>
              <Icon icon={arrows_slim_right} size={35} />
            </div>
          </a>
        </div>
        <div className="content-icons">
          <span>Desenvolvido com</span>
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
