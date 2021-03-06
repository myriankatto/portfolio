import React from 'react';
import TypeIt from 'typeit-react';
import './style.scss';
import { Link } from 'react-scroll';
import video from '../../video/myrian.mp4';

export default function HeaderText() {
  return (
    <div className="header-text">
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
      </video>
      <TypeIt
        options={{ cursor: false }}
        getBeforeInit={(instance) => {
          instance
            .type('Desenvolvedora Front-End focada <br>em <strong>novas tecnologias.</strong>')
            .pause(750)
            .delete(18)
            .pause(500)
            .type('<strong>desenvolvimento centrado no ser humano.</strong>')
            .pause(750)
            .delete(39)
            .pause(500)
            .type('<strong>experiência do usuário.</strong>')
            .pause(750)
            .delete(23)
            .pause(500)
            .type('<strong>soluções criativas.</strong>');

          // Remember to return it!
          return instance;
        }}
      />
      {/* <img src={scroll} alt="scroll" /> */}
      <div className="mouse-container">
        <Link
          className="link-item mouse-scroll"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <span className="mouse">
            <span className="mouse-movement"></span>
          </span>
        </Link>
      </div>
    </div>
  );
}
