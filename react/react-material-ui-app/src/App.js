import "./App.css";
import { Box, Stack } from "@mui/material";
import LeftBody from './components/LeftBody';
import CenterBody from './components/CenterBody';
import RightBody from "./components/RightBody";
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Box>
      <Header />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <LeftBody />
        <CenterBody />
        <RightBody />
      </Stack>
      <Footer />
    </Box>
  );
}

export default App;
