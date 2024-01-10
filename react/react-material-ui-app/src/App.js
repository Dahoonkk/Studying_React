import "./App.css";
import { Box, Stack } from "@mui/material";
import LeftBody from "./components/LeftBody";
import CenterBody from "./components/CenterBody";
import RightBody from "./components/RightBody";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftBody />
          <CenterBody />
          <RightBody mode={mode} setMode={setMode} />
        </Stack>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
