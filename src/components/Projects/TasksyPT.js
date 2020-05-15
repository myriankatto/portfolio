import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './style.scss';
import tasksy from './../../images/img-tasksy.png';

import { Icon } from 'react-icons-kit';
import { arrows_slim_right } from 'react-icons-kit/linea/arrows_slim_right';
import {github} from 'react-icons-kit/icomoon/github'

//Icons

import react from './../../images/react.svg';
import mongodb from './../../images/mongodb.svg';
import express from './../../images/expressjs-icon.svg';
import node from './../../images/nodejs-icon.svg';
import sass from './../../images/sass-1.svg';
import api from './../../images/api.svg';

const Tasksy = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="project" id="Projetos">
      <div className="project-content" data-aos="fade-down">
        <h1>Tasksy</h1>
        <p>
          É um aplicativo MERN Stack desenvolvido para ajudar a melhorar o ambiente de trabalho! Foi
          criado para ajudar as equipes a listar todas as tarefas que precisam ser executadas em
          seus espaços de trabalho, para que todos possam colaborar para mantê-lo limpo e agradável.
          Tasksy usa a metodologia de gamificação e todos serão recompensados ​​pelo excelente
          trabalho realizado! Este é o meu projeto final no Bootcamp na Ironhack e foi desenvolvido
          com o React.Js.
        </p>
        <div className="content-btn">
          <a
            href="https://github.com/myriankatto/ironhack-project3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="github-btn">
            <Icon icon={github} size={20} /> <span>Github</span>
            </div>
          </a>
          <a href="https://tasksyapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-btn">
              <span>Ver projeto</span>
              <Icon icon={arrows_slim_right} size={35} />
            </div>
          </a>
        </div>
        <div className="content-icons">
          <span>Desenvolvido com</span>
          <div className="icons">
            <span tooltip="ReactJs" flow="down">
              <img src={react} style={{ width: '3.4em' }} alt="React.js" />
            </span>
            <span tooltip="NodeJs" flow="down">
              <img src={node} style={{ width: '3em' }} alt="Node.js" />
            </span>
            <span tooltip="Mongo DB" flow="down">
              <img src={mongodb} style={{ width: '9.5em' }} alt="Mongodb" />
            </span>
            <span tooltip="Express.js" flow="down">
              <img src={express} style={{ width: '3em' }} alt="Express.js" />
            </span>
            <span tooltip="Rest API" flow="down">
              <img src={api} style={{ width: '3em' }} alt="Rest API" />
            </span>
            <span tooltip="Sass" flow="down">
              <img src={sass} style={{ width: '3.2em' }} alt="Sass" />
            </span>
          </div>
        </div>
      </div>
      <div className="project-image" data-aos="fade-up">
        <img className="img-1" src={tasksy} alt="Myrian Katto" />
      </div>
    </div>
  );
};

export default Tasksy;
