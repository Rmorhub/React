import React from 'react';

const Greeting = (props) => {
  return (
    <div className="greeting">{`My name is ${props.user.firtstName} ${props.user.lastName}. I'm ${props.user.birthDate} years old`}</div>
  );
};

export default Greeting;
