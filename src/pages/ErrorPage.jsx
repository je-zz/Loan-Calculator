import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';  // Import the useTheme hook

const ErrorPage = () => {
  const theme = useTheme();  // Access the current theme

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default,  // Dynamic background color based on theme
      }}
    >
      <Typography variant="h2" color="error" sx={{ mb: 2 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Oops! The page you're looking for does not exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/"
        sx={{ padding: '10px 20px' }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
