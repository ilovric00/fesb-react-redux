import React from 'react';
import AddForm from './AddForm';
import CardList from './CardList';

const Main = (props) => {
  return (
    <main className="container--flex container--flex--column">
      <AddForm onSubmit={props.onSubmit} />
      <CardList cards={props.cards} />
    </main>
  );
}

export default Main;
