import React from 'react';
import TypeIt from 'typeit-react';
import './style.scss';
import videoMobile from '../../video/myrian-mobile.mp4';

export default function HeaderText() {
  return (
    <React.Fragment>
      <div className="header-text">
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
      </div>
      <video autoPlay loop muted className="video-mobile">
        <source src={videoMobile} type="video/mp4" />
      </video>
    </React.Fragment>
  );
}
