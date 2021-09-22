import React from 'react';

const Greeting = (props) => {
  return (
    <div className="greeting">{`My name is ${props.firtstName} ${props.lastName}. I'm ${props.birthdate} years old`}</div>
  );
};

export default Greeting;
