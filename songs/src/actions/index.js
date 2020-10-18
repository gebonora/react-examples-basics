// Action creator
export const selectSong = (song) => {
  // Return an action, that MUST have a type
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

