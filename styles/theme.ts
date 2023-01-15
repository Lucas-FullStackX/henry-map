import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

const lightTheme = createTheme({
  palette: {
    mode: 'light'
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
    }
  }
});

export default lightTheme;
