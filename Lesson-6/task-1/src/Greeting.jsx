import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

const Greeting = (props) => {
  // const { isLoggedIn } = props;
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;
