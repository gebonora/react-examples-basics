const songsReducer = () => {
  return [
    { title: "Goteo", duration: "2:44" },
    { title: "Pininfarina", duration: "4:21" },
    { title: "Born in the USA", duration: "4:39" },
    { title: "God's Plan", duration: "3:19" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
