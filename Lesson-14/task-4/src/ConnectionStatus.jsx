import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const handleResize = event => {
      const online = event.type;
      if (online === 'online') {
        setStatus(true);
      } else {
        setStatus(false);
      }
    };
    window.addEventListener('online', handleResize);
    window.addEventListener('offline', handleResize);
    return () => {
      window.removeEventListener('online', handleResize);
      window.removeEventListener('offline', handleResize);
    };
  }, []);

  if (status) {
    return <div className="status status">Online</div>;
  }
  return <div className="status status_offline">Offline</div>;
};

export default ConnectionStatus;
