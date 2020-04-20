import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Margin from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Margin />
      <Header />
    </div>
  );
}

export default App;
