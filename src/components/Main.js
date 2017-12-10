import React from 'react';
import AddForm from './AddForm';
import CardList from './CardList';

let data = [{
  id: 1,
  name: 'Ivan Lovrić',
  avatar_url: 'https://avatars0.githubusercontent.com/u/11386470?v=4',
  company: 'Profico'
},
{
  id: 2,
  name: 'Mario',
  avatar_url: 'https://avatars0.githubusercontent.com/u/11386470?v=4',
  company: 'FESB'
}]

const Main = () => {
  return (
    <main className="container--flex container--flex--column">
      <AddForm />
      <CardList cards={data} />
    </main>
  );
}

export default Main;
