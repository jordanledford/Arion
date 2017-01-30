import React, { Component } from 'react';
import Splash from './Splash.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Arion</h1>
          <h3>An Instagram Tool</h3>
        </div>
        <Splash></Splash>
      </div>
    );
  }
}

export default App;
