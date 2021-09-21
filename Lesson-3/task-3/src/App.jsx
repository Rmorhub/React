import React from 'react';
import Comment from './comment';

const userInfo = {
  name: 'Stanislav',
  avatarUrl: 'https://avatars1.githubusercontent.com/Rmorhub',
};

const App = () => {
  return (
    <Comment
      user={userInfo}
      text="Good job!"
      date={new Date()}
    />
  );
};

export default App;
