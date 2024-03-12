import React from "react";
import useMusicPlayer from "./hook/useMusicPlayer";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Box from "@mui/material/Box";
function Controller() {
  const { togglePlay, playPreviousTrack, playNextTrack, isPlaying } =
    useMusicPlayer();
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          border: "2px solid #1C6EA4",
        }}
      >
        <button onClick={playPreviousTrack}>
          <SkipPreviousIcon />
        </button>
        <button onClick={togglePlay}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <button onClick={playNextTrack}>
          <SkipNextIcon />
        </button>
      </Box>
    </div>
  );
}

export default Controller;
