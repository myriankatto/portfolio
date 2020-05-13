import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//ENGLISH
import Header from './components/Header/Header';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import NavBarMenu from './components/NavBar/NavBarMenu';
import Tasksy from './components/Projects/Tasksy';
import BooksandTea from './components/Projects/BooksandTea';
import Wasabi from './components/Projects/Wasabi';
import Technologies from './components/Technologies/Technologies';
import Experience from './components/Experience/Experience';
import Contacts from './components/Contacts/Contacts';

//PORTUGUESE
import HeaderPT from './components/Header/HeaderPT';
import AboutPT from './components/About/AboutPT';
import TasksyPT from './components/Projects/TasksyPT';
import NavBarPT from './components/NavBar/NavBarPT';
import NavBarMenuPT from './components/NavBar/NavBarMenuPT';
import BooksandTeaPT from './components/Projects/BooksandTeaPT';
import WasabiPT from './components/Projects/WasabiPT';
import TechnologiesPT from './components/Technologies/TechnologiesPT';
import ExperiencePT from './components/Experience/ExperiencePT';
import ContactsPT from './components/Contacts/ContactsPT';

import './App.scss';

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
        <Switch>
          <Route path="/pt">
            {' '}
            <div className="App">
              <NavBarPT onClick={this.clickHandler} menuActive={this.state.menuActive} />
              {this.state.menuActive ? (
                <NavBarMenuPT onClick={this.clickHandler} menuActive={this.state.menuActive} />
              ) : (
                ''
              )}
              <HeaderPT />
              <AboutPT />
              <TasksyPT />
              <BooksandTeaPT />
              <WasabiPT />
              <TechnologiesPT />
              <ExperiencePT />
              <ContactsPT />
            </div>
          </Route>

          <Route path="/" exact>
            <div className="App">
              <NavBar onClick={this.clickHandler} menuActive={this.state.menuActive} />
              {this.state.menuActive ? (
                <NavBarMenu onClick={this.clickHandler} menuActive={this.state.menuActive} />
              ) : (
                ''
              )}
              <Header />
              <About />
              <Tasksy />
              <BooksandTea />
              <Wasabi />
              <Technologies />
              <Experience />
              <Contacts />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
