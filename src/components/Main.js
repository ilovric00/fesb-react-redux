import React from 'react';
import AddForm from './AddForm';
import CardList from './CardList';

const Main = () => {
  return (
    <main className="container--flex container--flex--column">
      <AddForm />
      <CardList />
    </main>
  );
}

export default Main;
