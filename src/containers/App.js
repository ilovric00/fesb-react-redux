import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

class App extends Component {
  filterCards = (searchText) => {}

  render() {
    return (
      <div className="container">
        <Header />
        <div className="container--flex wrapper">
          <Sidebar />
          <Main cards={this.props.filteredCards} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteredCards: state.cards.filteredCards,    
  };
}

export default connect(mapStateToProps)(App);
