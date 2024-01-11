/** @jsxImportSource @emotion/react */

import { Outlet, Routes, Route, BrowserRouter } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import BookDetailPage from "./pages/BookDetailPage";
import { Global, ThemeProvider, css, useTheme } from "@emotion/react";
import Footer from "./components/Footer";
import { useState } from 'react';
import { themeDark, themeLight } from "./components/Theme";

const Layout = ({isDark, setIsDark}) => {
  const theme = useTheme();
  
  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: ${theme.background};
            color: ${theme.text};
            transition-duration: 0.2s;
            transition-property: background-color, color;
          }
          a {
            color: ${theme.text};
            text-decoration: none;
          }
          ul {
            list-style: none;
            padding: 0;
          }
        `}
      />
      <div
        css={css`
          min-height: 90vh;
        `}
      >
        <Outlet />
      </div>
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <BrowserRouter>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <Routes>
          <Route path="/" element={<Layout isDark={isDark} setIsDark={setIsDark} />}>
            <Route index element={<SearchPage />} />
            <Route path="/book:bookId" element={<BookDetailPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
