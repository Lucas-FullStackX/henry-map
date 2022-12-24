import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Grid,
  Link,
  Typography,
  Divider
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import styles from './NavBar.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  console.log(user);

  function stringAvatar(name: string) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    };
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Link href="/about" className={styles.text} sx={{ marginLeft: '39px' }}>
          About
        </Link>
        <Link href="/contact" className={styles.text}>
          Contact
        </Link>
        <Link href="/" sx={{ margin: 'auto', textDecoration: 'none' }}>
          <Typography
            variant="h3"
            className={styles.title}
            sx={{ margin: 'auto', color: '#000000' }}
          >
            RoadMap
          </Typography>
        </Link>
        {isAuthenticated ? (
          <>
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ marginRight: '39px' }}
            >
              {/* <Avatar
                sx={{
                  bgcolor: '#FFFF02',
                  color: 'black'
                }}
              >
            </Avatar> */}
              <PersonIcon sx={{ fontSize: 28, color: '#000000' }} />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={2}>
                  <Avatar
                    {...stringAvatar(user.name)}
                    sx={{
                      bgcolor: '#FFFF02',
                      color: 'black',
                      width: 24,
                      height: 24,
                      fontSize: '12px',
                      marginRight: '5px',
                      marginLeft: '15px',
                      marginBottom: '10px',
                      marginTop: '8px'
                    }}
                  />
                </Grid>
                {user.email ? (
                  <Grid
                    item
                    xs={2}
                    sx={{
                      marginTop: '8px'
                    }}
                  >
                    {user.email}
                  </Grid>
                ) : (
                  <Grid
                    item
                    xs={2}
                    sx={{
                      marginTop: '8px',
                      marginLeft: '16px'
                    }}
                  >
                    {user.nickname}
                  </Grid>
                )}
              </Grid>
              <Divider />
              <MenuItem onClick={handleClose}>
                <PersonIcon
                  sx={{
                    marginRight: '10px',
                    marginLeft: '-2px'
                  }}
                />
                Your Profile
              </MenuItem>
              <MenuItem onClick={() => logout()}>
                <LogoutIcon sx={{ marginRight: '8px' }} />
                Log out
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <button
              className={styles.button1}
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
            <button
              className={styles.button2}
              onClick={() => loginWithRedirect()}
            >
              Sing Up
            </button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}