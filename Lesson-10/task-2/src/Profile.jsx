import React from 'react';
import UserForm from './ProductList';

const Profile = ({ userDate, handleChange }) => {
  return (
    <div className="column">
      <UserForm userDate={userDate} handleChange={handleChange} />
    </div>
  );
};

export default Profile;
