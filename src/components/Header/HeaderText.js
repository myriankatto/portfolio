import React from 'react';
import TypeIt from 'typeit-react';
import './style.scss';
import scroll from './../../images/ic-scroll.svg';

export default function HeaderText() {
  return (
    <div className="header-text">
      <TypeIt
        options={{ cursor: false }}
        getBeforeInit={(instance) => {
          instance
            .type('Full Stack Web Developer <br>focused on <strong>user experiences.</strong>')
            .pause(750)
            .delete(17)
            .pause(500)
            .type('<strong>new technologies.</strong>')
            .pause(750)
            .delete(17)
            .pause(500)
            .type('<strong>solving problems.</strong>')
            .pause(750)
            .delete(17)
            .pause(500)
            .type('<strong>creative solutions.</strong>');

          // Remember to return it!
          return instance;
        }}
      />
      <img src={scroll} alt="scroll" />
    </div>
  );
}
