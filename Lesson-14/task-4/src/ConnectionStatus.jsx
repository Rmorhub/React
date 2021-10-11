import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const online = window.navigator.onLine;
      setStatus(online);
    };
    window.addEventListener('online', handleResize);
    window.addEventListener('offline', handleResize);
    return () => {
      window.removeEventListener('online', handleResize);
      window.removeEventListener('offline', handleResize);
    };
  }, []);

  if (status) {
    return <div className="status status">online</div>;
  }
  return <div className="status status_offline">Offline</div>;
};

export default ConnectionStatus;
