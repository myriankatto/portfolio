import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export default class ScrollToContacts extends Component {
  onClickDown = () => {
    scroll.scrollToBottom();
  };

  render() {
    return (
      <button className="down" onClick={this.onClickDown}>
      Contato
      </button>
    );
  }
}
