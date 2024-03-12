import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./TrackList";
import Controller from "./Controller ";
import Box from "@mui/material/Box";

const App = () => {
  return (
    <MusicPlayerProvider>
      <Box
        sx={{
          border: "5px ",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",

          backgroundColor: "	#006666",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <TrackList />
        <Controller />
      </Box>
    </MusicPlayerProvider>
  );
};

export default App;
