import React, { Component } from 'react';

import Burger from 'react-css-burger';

class BurgerMenu extends Component {

  render() {
    return (
      <div style={{ cursor: 'pointer', marginBottom:'20px' }}>
        <Burger
          onClick={this.props.onClick}
          active={this.props.menuActive}
          burger="collapse"
          color="#9a9b9e"
          scale={0.6}
        />
      </div>
    );
  }
}

export default BurgerMenu;
