import React from 'react';

const Card = (props) => {
  return (
    <div className="c-card">
      <img src="http://placehold.it/75" alt="avatar"/>
      <div className="c-card__content">
        <div className="c-card__content__title">Name here...</div>
        <div className="c-card__content__description">Company name here...</div>
      </div>
    </div>
  );
}

export default Card;
