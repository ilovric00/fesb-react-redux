import React, { Component } from 'react';
import AddForm from './AddForm';
import CardList from './CardList';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
        id: 31274389,
        name: 'Ivan Lovrić',
        avatar_url: "https://avatars3.githubusercontent.com/u/31274389?v=4",
        company: "Profico.hr"
      }]
    };
  }

  addNewCard = (card) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(card)
    }));
  }

  render() {
    return (
      <main className="container--flex container--flex--column">
        <AddForm onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards} />
      </main>
    );
  }
}

export default Main;
