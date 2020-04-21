import React, { Component } from 'react';
import Menu from './NavBarMenu';

import github from './../../images/ic-navbar-github.svg';
import linkedin from './../../images/ic-navbar-linkedin.svg';
//Icons
import { Icon } from 'react-icons-kit';
import { globe } from 'react-icons-kit/feather/globe';

import './style.scss';

class NavBar extends Component {
  render() {
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
          <Menu
            style={{ marginBottom: '15px', paddingLeft: '-20px' }}
            onClick={this.props.onClick} menuActive={this.props.menuActive}
            
          />
        </div>

        {/* Bottom */}
        <div className="bottom"></div>
      </div>
    );
  }
}

export default NavBar;
