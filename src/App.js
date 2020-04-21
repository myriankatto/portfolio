import React, { Component } from 'react';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Menu from './components/Menu/Menu';
import About from './components/About/About'

export class App extends Component {
  constructor() {
    super();

    this.state = {
        menuActive: false
    };
    this.clickHandler = this.clickHandler.bind(this); 
}
clickHandler() {
  this.setState({ menuActive: !this.state.menuActive });
}

  handleMenuActive 
  render() {
    return (
      <div className="App">
        <NavBar onClick={this.clickHandler} menuActive={this.state.menuActive}/>
        {this.state.menuActive ? <Menu /> : ''} 
        <Header/>
        <About />
      </div>
    );
  }
}

export default App;
