// list of songs

import { combineReducers } from 'redux';

const songsReducers = () => {
  return [
    { title: 'No scrubs', duration: '3:16' },
    { title: 'All Star', duration: '2:14' },
    { title: 'I want it that way', duration: '2:54' },
    { title: 'Marcorina', duration: '1:45' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer,
});
