import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="container--flex wrapper">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
