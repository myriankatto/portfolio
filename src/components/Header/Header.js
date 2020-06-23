import React from 'react';
import './style.scss';

import HeaderText from './HeaderText';
import HeaderTextMobile from './HeaderTextMobile';

function Header() {
  return (
    <React.Fragment>
    <div className="header-container">
      <HeaderText />

    </div>
    <div className="header-container-mobile">
      <HeaderTextMobile />

    </div>
    </React.Fragment>
  );
}

export default Header;
