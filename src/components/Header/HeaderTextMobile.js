import React from 'react';
import TypeIt from 'typeit-react';
import './style.scss';
import videoMobile from '../../video/myrian-mobile.mp4'


export default function HeaderText() {
  return (
    <React.Fragment>
    <div className="header-text">
  
      <TypeIt
        options={{ cursor: false }}
        getBeforeInit={(instance) => {
          instance
            .type('Full Stack Developer focused <br>on <strong>user experiences.</strong>')
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
      {/* <img src={scroll} alt="scroll" /> */}
  
    </div>
      <video autoPlay loop muted className="video-mobile">
      <source src={videoMobile} type="video/mp4"/>
    </video>

    </React.Fragment>

    
  );
}
