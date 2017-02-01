import React, { Component } from 'react';
import Splash from './components/Splash.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Arion</h1>
          <h5>An Instagram Tool</h5>
        </div>
        <Splash></Splash>
      </div>
    );
  }
}

export default App;
