import React from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';

const App = (props) => {
  return (
    <div className='ui container row grid'>
      <div className='eight wide column'>
        <SongList></SongList>
      </div>
      <div className='eight wide column'>
        <SongDetail></SongDetail>
      </div>
    </div>
  );
};

export default App;
