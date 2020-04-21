import React, { Component } from 'react';

import './style.scss';
class Menu extends Component {
  render() {
    return (
      <div className="menu-list">
        <ul>
          <a href="#"><li>About Me</li></a>
          <a href="#"><li>Projects</li></a>
          <a href="#"><li>Skills</li></a>
          <a href="#"> <li>Experience</li></a>
          <a href="#"><li>Contacts</li></a>
        </ul>
      </div>
    );
  }
}

export default Menu;
