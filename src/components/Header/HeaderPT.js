import React from 'react';
import './style.scss';

import HeaderTextPT from './HeaderTextPT';
import HeaderTextMobilePT from './HeaderTextMobilePT';

function Header() {
  return (
    <React.Fragment>
    <div className="header-container">
      <HeaderTextPT />

    </div>
    <div className="header-container-mobile">
      <HeaderTextMobilePT />

    </div>
    </React.Fragment>
  );
}

export default Header;
