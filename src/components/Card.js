import React from 'react';

const Card = (props) => {
  return (
    <div className="c-card">
      <img src={props.avatar_url} width="75" alt="avatar"/>
      <div className="c-card__content">
        <div className="c-card__content__title">{props.name}</div>
        <div className="c-card__content__description">{props.company}</div>
      </div>
    </div>
  );
}

export default Card;
