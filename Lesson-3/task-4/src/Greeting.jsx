import React from 'react';

const age = (date) => {
  const diff = new Date() - date;
  const age = new Date(diff).getFullYear() - 1970;
  return age;
};

const Greeting = (props) => {
  return (
    <div className="greeting">{`My name is ${props.firtstName} ${props.lastName}. I'm ${age(props.birthDate)} years old`}</div>
  );
};

export default Greeting;
