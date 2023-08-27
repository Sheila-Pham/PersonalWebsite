import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';

const pages = ['Home','About', 'Work', 'Portfolio', 'Contact'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const history = useHistory();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (pageName) => {
    switch (pageName){
        case 'Home':
            history.push('/');
            break;
        case 'About':
            history.push('/about');
            break;
        case 'Work':
            history.push('/work');
            break;
        case 'Portfolio':
            history.push('/portfolio');
            break;
        case 'Contact':
            history.push('/contact');
            break;
        default :
            break;
    }
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor: 'gray'}}>
        <Box sx={{ bgcolor: 'white', height: '1vh' }} />
      <Container maxWidth="flex">

      <Box sx={{ bgcolor: 'lavender', }} />
      
        <Toolbar disableGutters sx={{bgcolor: 'gray'}}>
            {/**When the application is zoomed out */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/PersonalWebsite/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'pink',
              textDecoration: 'none',
            }}
          >
            SHEILA EVE PHAM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, bgcolor: 'gray' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/**When the application is zoomed in, show dropdown list option */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> 
          </Box>
          
          
            {/**When the application is zoomed in */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'pink',
              textDecoration: 'none',
            }}
          >
            SHEILA EVE PHAM
          </Typography>

          {/**When the application is zoomed out, show the button and name of the pages */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, bgcolor: 'gray' ,  justifyContent: 'flex-end'}}>
          {/** iterating thru the pages*/}
            {pages.map((page, i) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'pink', display: 'block'}}
                variant="h4"
              >
                <Typography 
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 300,
                  }}
                >
                     {/**For each page in the pages array, */}
                     {page}
                </Typography>
              </Button>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;