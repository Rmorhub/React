import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState({
    onlineStatus: true,
  });

  useEffect(() => {
    const handleResize = event => {
      console.log(event)
      const online = event.type;
      if (online === 'online') {
        setStatus({ onlineStatus: true });
      } else {
        setStatus({ onlineStatus: false });
      }
    };
    window.addEventListener('online', handleResize);
    window.addEventListener('offline', handleResize);
    return () => {
      window.removeEventListener('online', handleResize);
      window.removeEventListener('offline', handleResize);
    };
  }, []);

  const { onlineStatus } = status;
  if (onlineStatus) {
    return <div className="status status">Online</div>;
  }
  return <div className="status status_offline">Offline</div>;
};

export default ConnectionStatus;
