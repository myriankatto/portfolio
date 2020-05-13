import React from 'react';
import TypeIt from 'typeit-react';
import './style.scss';
import scroll from './../../images/ic-scroll.svg';
import { Link } from 'react-scroll';

export default function HeaderText() {
  return (
    <div className="header-text">
      <TypeIt
        options={{ cursor: false }}
        getBeforeInit={(instance) => {
          instance
            .type('Full Stack Web Developer <br>focada em <strong>experiência do usuário.</strong>')
            .pause(750)
            .delete(23)
            .pause(500)
            .type('<strong>novas tecnologias.</strong>')
            .pause(750)
            .delete(18)
            .pause(500)
            .type('<strong>resolução de problemas.</strong>')
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
