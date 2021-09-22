import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';

const johnBirthdate = new Date('2001-01-01T11:11:11.819Z');

const johnDoeAge = (date) => {
  const diff = new Date() - date;
  const age = new Date(diff).getFullYear() - 1970;
  return age;
};

const johnDoe = {
  firtstName: 'John',
  lastName: 'Doe',
  birthdate: johnDoeAge(johnBirthdate),
};

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firtstName={johnDoe.firtstName}
    lastName={johnDoe.lastName}
    birthdate={johnDoe.birthdate}
  />,
  rootElement
);
