import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({ audioRef, songs, setCurrentSong, isPlaying }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            id={song.id}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
