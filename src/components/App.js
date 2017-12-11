import React, { Component } from 'react';
import logo from '../assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="c-app">
        <header className="c-app__header">
          <img src={logo} className="c-app__logo" alt="logo" />
          <h1 className="c-app__title">Welcome to React Scss boilerplate</h1>
        </header>
        <p className="c-app__intro">
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
