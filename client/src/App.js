import React, { Component } from 'react';
import Splash from './components/Splash.js';
import Signin from './components/signin.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Arion</h1>
          <h5>An Instagram Tool</h5>
        </div>
          <Signin provider='instagram' onSuccess={this.setState()} onFailed={console.alert('something went wrong while signing in.')} onCancel={console.alert('sign in canceled')} />
        <Splash></Splash>
      </div>
    );
  }
}

export default App;

