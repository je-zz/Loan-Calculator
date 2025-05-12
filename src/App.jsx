import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, Container, ThemeProvider, createTheme } from '@mui/material';

import Home from './pages/Home';
import About from './pages/About';
import ExchangeRatesPage from './pages/ExchangeRatesPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Create light and dark themes
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',  // Toggle between light and dark modes
    },
  });

  // Toggle dark mode function
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets CSS for consistent styling */}
      <Header onToggleDarkMode={handleToggle} isDarkMode={isDarkMode} />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exchange-rates" element={<ExchangeRatesPage />} />
          <Route path="/error-page" element={<ErrorPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
