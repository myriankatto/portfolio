import React, { Component } from 'react';

import Header from './components/Header/Header';
import About from './components/About/About';
import AboutMe from './components/AboutMe/AboutMe';
import NavBar from './components/NavBar/NavBar';
import NavBarMenu from './components/NavBar/NavBarMenu';
import { BrowserRouter } from 'react-router-dom';
import Tasksy from './components/Projects/Tasksy';
import BooksandTea from './components/Projects/BooksandTea';
import Wasabi from './components/Projects/wasabi';
import Contacts from './components/Contacts/Contacts';

import './App.scss'

export class App extends Component {
  constructor() {
    super();

    this.state = {
      menuActive: false,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ menuActive: !this.state.menuActive });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar onClick={this.clickHandler} menuActive={this.state.menuActive} />
          {this.state.menuActive ? <NavBarMenu /> : ''}
          <Header />
          <About />
          <Tasksy />
          <BooksandTea />
          <Wasabi /> 
          <Contacts />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
