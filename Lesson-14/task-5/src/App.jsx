import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [isVisible, setVisible] = useState(true);
  return (
    <>
      <div>
        <button className="btn" onClick={() => setVisible(true)}>
          Show
        </button>
        <button className="btn" onClick={() => setVisible(false)}>
          Hide
        </button>
      </div>
      {isVisible && (
        <>
          <Clock location={'New York'} offset={-5} />
          <Clock location={'Kyiv'} offset={2} />
          <Clock location={'London'} offset={0} />
        </>
      )}
    </>
  );
};

export default App;
