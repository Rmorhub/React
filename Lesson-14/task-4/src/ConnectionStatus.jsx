import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const handleResize = event => {
      setStatus(event.target.navigator.onLine);
    };
    window.addEventListener('online', handleResize);
    window.addEventListener('offline', handleResize);
    return () => {
      window.removeEventListener('online', handleResize);
      window.removeEventListener('offline', handleResize);
    };
  }, []);

  if (!status) {
    return <div className="status status_offline">offline</div>;
  }
  return <div className="status">online</div>;
};

export default ConnectionStatus;
