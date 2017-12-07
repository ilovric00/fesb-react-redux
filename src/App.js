import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState()
    };
  }

  componentDidMount() {
    // You can use subscribe() to update the UI in response to state changes.
    // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
    // However it can also be handy to persist the current state in the localStorage.
    store.subscribe(() => {
      this.setState({ counter: store.getState() });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple Redux example with React</h1>
          {/* The only way to mutate the internal state is to dispatch an action. */}
          {/* The actions can be serialized, logged or stored and later replayed. */}
          <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
          <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
        </header>
        <p className="App-intro">Counter value from Redux store: {this.state.counter}</p>
      </div>
    );
  }
}

export default App;
