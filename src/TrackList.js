import useMusicPlayer from "./hook/useMusicPlayer";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Box from "@mui/material/Box";
const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <div className="track-list">
      <Box sx={{ border: "2px solid #1C6EA4" }}>
        <Box sx={{ display: "grid", justifyContent: "center" }}>
          <h3 className="current-track">Current Track: {currentTrackName}</h3>
        </Box>
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul className="track-items">
            {trackList.map((track, index) => (
              <li key={index} className="track-item">
                <span className="track-name" onClick={() => playTrack(index)}>
                  {track.name}
                </span>
                <button
                  className={`play-button ${
                    currentTrackName === track.name && isPlaying ? "pause" : ""
                  }`}
                  onClick={() => playTrack(index)}
                  style={{ borderRadius: "50%" }}
                >
                  {currentTrackName === track.name && isPlaying ? (
                    <PauseIcon />
                  ) : (
                    <PlayArrowIcon />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </div>
  );
};

export default TrackList;
