import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import github from './../../images/ic-navbar-github.svg';
import instagram from './../../images/ic-navbar-instagram.svg';
import linkedin from './../../images/ic-navbar-linkedin.svg';
//Icons
import { Icon } from 'react-icons-kit';
import { globe } from 'react-icons-kit/feather/globe';

import './style.scss';
import BurgerMenu from './BurgerMenu';
import ScrollToTop from '../Scroll/ScrollToTop';
import ScrollToContacts from '../Scroll/ScrollToContacts';

class NavBar extends Component {
  render() {
    return (
      <div className="margin">
        {/* Left */}
        <div className="left">
          <div className="icons">
            <a href="https://github.com/myriankatto"
              className="icons-svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>

            <a href="https://www.linkedin.com/in/myrian-katto-2792a921/"
              className="icons-svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/myrionn"
              className="icons-svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="right">
          <h2>
            <ScrollToContacts />
          </h2>
        </div>

        {/* Top */}
        <div className="top">
          <div className="language" style={{ color: '#9a9b9e' }}>
            <Icon icon={globe} size={15} /> <span>PT</span>
          </div>
          <h1>
            <ScrollToTop />
          </h1>

          <BurgerMenu onClick={this.props.onClick} menuActive={this.props.menuActive} />
        </div>

        {/* Bottom */}
        <div className="bottom"></div>
      </div>
    );
  }
}

export default NavBar;
