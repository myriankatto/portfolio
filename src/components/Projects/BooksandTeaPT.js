import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.scss';
import books from './../../images/img-books.png';

import { Icon } from 'react-icons-kit';
import { arrows_slim_right } from 'react-icons-kit/linea/arrows_slim_right';
import {github} from 'react-icons-kit/icomoon/github'

//Icons

import mongodb from './../../images/mongodb.svg';
import express from './../../images/expressjs-icon.svg';
import node from './../../images/nodejs-icon.svg';
import handlebars from './../../images/handlebars-1.svg';
import bootstrap from './../../images/bootstrap-4.svg';

const BooksandTea = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="project-grey-bg">
      <div className="project-image" data-aos="fade-up">
        <img className="img-2" src={books} alt="Myrian Katto" />
      </div>
      <div className="project-content" data-aos="fade-down">
        <h1>Books and Tea</h1>
        <p>
          Books and Tea é uma plataforma para os amantes de livros. Os usuários podem procurar
          livros, adicionar e remover para diferentes estantes, avaliá-los e deixar
          comentários. Foi desenvolvido com a API do Google Books.
        </p>
        <div className="content-btn">
          <a
            href="https://github.com/myriankatto/project2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="github-btn">
            <Icon icon={github} size={20} /><span>Github</span>
            </div>
          </a>
          <a href="https://booksandtea.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-btn">
              <span>Ver projeto</span>
              <Icon icon={arrows_slim_right} size={35} />
            </div>
          </a>
        </div>
        <div className="content-icons">
          <span>Desenvolvido com</span>
          <div className="icons">
            <span tooltip="NodeJs" flow="down">
              <img src={node} style={{ width: '3em' }} alt="Node.js" />
            </span>
            <span tooltip="Mongo DB" flow="down">
              <img src={mongodb} style={{ width: '9.5em' }} alt="Mongodb" />
            </span>
            <span tooltip="ExpressJS" flow="down">
              <img className="express" src={express} style={{ width: '3em' }} alt="Express.js" />
            </span>
            <span tooltip="Handlebars" flow="down">
              <img
                className="handlebars"
                src={handlebars}
                style={{ width: '5em' }}
                alt="Handlebars"
              />
            </span>
            <span tooltip="Bootstrap" flow="down">
              <img
                className="bootstrap"
                src={bootstrap}
                style={{ width: '2.8em' }}
                alt="Bootstrap"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksandTea;
