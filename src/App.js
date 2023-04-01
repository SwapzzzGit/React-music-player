import React, { useState } from "react";
//Import Styles
import "./styles/app.scss";
//Addin Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
//import util
import data from "./util";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
