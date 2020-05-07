import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from './NavBarMenu';

import github from './../../images/ic-navbar-github.svg';
import linkedin from './../../images/ic-navbar-linkedin.svg';
//Icons
import { Icon } from 'react-icons-kit';
import { globe } from 'react-icons-kit/feather/globe';

import './style.scss';
import BurgerMenu from './BurgerMenu';




class NavBar extends Component {

  render() {
    return (
      <div className="margin">
        {/* Left */}
        <div className="left">
          <div className="icons">
            <Link
              to="https://github.com/myriankatto"
              className="icons-svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </Link>

            <Link
              to="https://www.linkedin.com/in/myrian-katto-2792a921/"
              className="icons-svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="right">
          <h2>CV</h2>
        </div>

        {/* Top */}
        <div className="top">
          <div style={{ color: '#9a9b9e' }}>
            <Icon icon={globe} size={15} /> <span>PT</span>
          </div>
          <h1>Myrian Katto</h1>
          <BurgerMenu onClick={this.props.onClick} menuActive={this.props.menuActive} />
        </div>

        {/* Bottom */}
        <div className="bottom"></div>
      </div>
    );
  }
}

export default NavBar;
