import React from 'react';

const Logout = (onLogout) => (
    <button className="btn logout" onClick={onLogout.onLogout}>
      Logout
    </button>
  );

export default Logout;
