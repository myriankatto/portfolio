import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import { Icon } from 'react-icons-kit';
import { arrows_slim_right } from 'react-icons-kit/linea/arrows_slim_right';

function Contacts() {
  return (
    <div className="contacts" id="Contacts">
      <div className="contacts-left">
        <h1>Get in touch:</h1>
        <h5>myriankatto@gmail.com</h5>
        <h5>+55 11 998025678</h5>
        <h6>Myrian Katto @ 2020</h6>
      </div>
      <div className="contacts-right">
        <h2>Let's have a coffee?</h2>
        <Link to="/" target="_blank">
          <div className="contacts-btn">
            <span>Schedule here </span>
            <Icon style={{ marginLeft: '1em' }} icon={arrows_slim_right} size={35} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Contacts;
