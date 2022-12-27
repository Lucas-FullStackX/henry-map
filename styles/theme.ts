// styles/theme.ts

import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: 'light',
    common: {
      black: '#19192B',
      white: '#ffffff'
    },
    primary: {
      main: '#FFFF02',
      contrastText: '#212121'
    },
    secondary: {
      main: '#212121', // omitting light and dark will calculate from main
      contrastText: '#fff'
    },
    grey: {
      '500': '#bcbcbc',
      '700': '#79797a'
    },
    info: {
      main: '#1bb2f1'
    },
    success: {
      main: '#00d589'
    },
    error: {
      main: '#832838'
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: 'Roboto'
  }
});

export default theme;
