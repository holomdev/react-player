const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = async () => {
    const newSongs = songs.map((item) => {
      const isActive = item.id === song.id;
      return {
        ...item,
        active: isActive,
      };
    });
    setSongs(newSongs);
    await setCurrentSong(song);
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
