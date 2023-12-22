import { createTheme } from '@mui/material/styles';
import './fonts/fonts.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#212df3', // your primary color
    },
    secondary: {
      main: '#f37e21', // your secondary color
    },
    
  },
  typography: {
    fontFamily: 'raaj'
  }
});

export default theme;
