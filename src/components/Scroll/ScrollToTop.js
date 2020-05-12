import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './style.scss';
export default class ScrollToTop extends Component {
  onClickUp = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <button className="up" onClick={this.onClickUp}>
        Myrian Katto
      </button>
    );
  }
}
