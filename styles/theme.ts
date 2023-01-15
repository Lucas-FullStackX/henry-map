import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});
export const PRIMARY = '#ffff02';
export const SECONDARY = '#000';
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: PRIMARY
    },
    secondary: {
      main: SECONDARY
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontFamily: roboto.style.fontFamily
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
        disableElevation: true,
        color: 'primary',
        variant: 'contained'
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: SECONDARY,
          fontWeight: '700',
          '&:hover': {
            color: SECONDARY,
            textDecoration: 'none'
          }
        }
      }
    }
  }
});

export default lightTheme;
