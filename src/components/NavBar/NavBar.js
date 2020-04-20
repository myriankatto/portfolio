import React from 'react';
import github from './../../images/ic-navbar-github.svg';
import linkedin from './../../images/ic-navbar-linkedin.svg';
import { Icon } from 'react-icons-kit';
import {menu} from 'react-icons-kit/feather/menu'
import {globe} from 'react-icons-kit/feather/globe'

import './style.scss';

function NavBar() {
  return (
    <div className="margin">
      {/* Left */}
      <div className="left">
        <div className="icons">
          <a href="https://github.com/myriankatto" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/myrian-katto-2792a921/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="right">
        <h2>Contacts</h2>
      </div>

      {/* Top */}
      <div className="top">
        <div style={{ color: '#9a9b9e' }}>
          <Icon icon={globe} size={15} /> <span>PT</span>
        </div>
        <h1>Myrian Katto</h1>
        <div style={{ color: '#30333d' }}>
          <Icon icon={menu} size={25} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
