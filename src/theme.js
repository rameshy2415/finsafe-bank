// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',  // Green for bank branding
    },
    secondary: {
      main: '#1976d2',  // Blue for buttons
    },
    success: {
      main: '#388e3c',  // Success color for Deposit
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
