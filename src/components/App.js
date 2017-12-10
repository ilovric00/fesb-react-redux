import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
        id: 31274389,
        name: 'Ivan Lovrić',
        avatar_url: "https://avatars3.githubusercontent.com/u/31274389?v=4",
        company: "Profico.hr"
      }],
      filteredCards: []
    };
  }

  componentWillMount() {
    this.setState({ filteredCards: this.state.cards });    
  }

  addCard = (card) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(card),
      filteredCards: prevState.filteredCards.concat(card)      
    }));
  }

  filterCards = (searchText) => {
    this.setState(prevState => ({
      filteredCards: prevState.cards.filter(card => {
        return card.name.toLowerCase().search(searchText.toLowerCase()) !== -1;
      })
    }));
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="container--flex wrapper">
          <Sidebar onChange={this.filterCards} />
          <Main cards={this.state.filteredCards} onSubmit={this.addCard} />
        </div>
      </div>
    );
  }
}

export default App;
