import React from "react";
import LibrarySong from "./LibrarySong";
import Song from "./Song";
const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((Song) => (
          <LibrarySong song={Song} />
        ))}
      </div>
    </div>
  );
};
export default Library;
