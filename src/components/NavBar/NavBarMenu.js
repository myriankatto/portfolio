import React, { Component } from 'react';

import Burger from 'react-css-burger';

class Menu extends Component {

  render() {
    return (
      <div style={{ marginRight: '-10px', marginBottom: '20px', cursor: 'pointer' }}>
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

export default Menu;
