import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import './index.scss';

const rootElement = document.querySelector('#root');

const usersData = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 21,
    name: 'Anna',
  },
  {
    id: 'id-5',
    age: 17,
    name: 'Anton',
  },
  {
    id: 'id-6',
    age: 18,
    name: 'Andrey',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'Tima',
  },
];

ReactDOM.render(<UsersList users={usersData} />, rootElement);
