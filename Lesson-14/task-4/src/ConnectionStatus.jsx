import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const handleStatus = event => {
      setStatus(event.target.navigator.onLine);
    };
    window.addEventListener('online', handleStatus);
    window.addEventListener('offline', handleStatus);
    return () => {
      window.removeEventListener('online', handleStatus);
      window.removeEventListener('offline', handleStatus);
    };
  }, []);

  if (!status) {
    return <div className="status status_offline">offline</div>;
  }
  return <div className="status">online</div>;
};

export default ConnectionStatus;
