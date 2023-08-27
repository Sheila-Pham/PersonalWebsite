import './App.css';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import Routes from './Routes';
import { ThemeProvider, createTheme } from '@mui/material';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const THEME = createTheme({
    color: {
      primary: "#757575",
      secondary: "#38817A",
      tertiary: "#87DFD6",
      quaternary: "#F9F8EB"
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1000,
        lg: 2000,
        xl: 3500,
      }
    },
})

function App() {
  return (
    <>
      <HashRouter> 
      {/**BrowserRouter is for routing between pages */}
        <ThemeProvider theme={THEME}>
          <Routes/>
        </ThemeProvider>
      </HashRouter>
    </>
  );
}

export default App;
