import React from 'react';
import Counter from './Counter';

const App = () => (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={-50} interval={100} />
      <Counter start={0} interval={300} />
    </>
  );

export default App;
