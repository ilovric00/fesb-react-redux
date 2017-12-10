import React from 'react';
import Card from './Card';

const CardList = (props) => {
  return (
    <div className="container--flex container--flex--column">
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  );
}

export default CardList;
