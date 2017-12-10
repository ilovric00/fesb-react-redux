import React from 'react';
import Card from './Card';

const CardList = () => {
  return (
    <div className="container--flex container--flex--column">
      <Card />
      <Card />
    </div>
  );
}

export default CardList;
