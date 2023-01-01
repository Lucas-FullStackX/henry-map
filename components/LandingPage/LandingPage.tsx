import styles from './LandingPage.module.css';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ShareIcon from '@mui/icons-material/Share';
import MapIcon from '@mui/icons-material/Map';
import { Avatar, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../img/HENRY_logo_1.png';

export default function LadingPage() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <Box className={styles.containerPro}>
      <div className={styles.circle}>
        <img src={logo.src} className={styles.img} />
      </div>
      <div className={styles.fontLogo}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>RoadMap App</h1>
        <p className={styles.text}>
          This app is designed so that you have a path to follow when learning
          <br />
          to program.
        </p>
        {isAuthenticated ? (
          <Link href="/home">
            <button className={styles.button}>Get Started</button>
          </Link>
        ) : (
          <button className={styles.button} onClick={() => loginWithRedirect()}>
            Get Started
          </button>
        )}
      </div>
      <h2 className={styles.paths}>Discover the learning paths</h2>
      {/* <div className={styles.circle2}></div> */}
      <Box sx={{ marginLeft: '60px' }}>
        <Grid container>
          <Grid className={styles.cards} sx={{ marginRight: '22px' }}>
            <h5 className={styles.textCard}>Desarrollo FrontEnd</h5>
            <AlignVerticalBottomIcon
              className={styles.icons}
              fontSize="large"
            />
          </Grid>
          <Grid className={styles.cards} sx={{ marginRight: '22px' }}>
            <h5 className={styles.textCard}>Desarrollo BackEnd</h5>
            <AlignVerticalTopIcon className={styles.icons} fontSize="large" />
          </Grid>
          <Grid className={styles.cards} sx={{ marginRight: '22px' }}>
            <h5 className={styles.textCard}>Desarrollo FullStack</h5>
            <AlignVerticalCenterIcon
              className={styles.icons}
              fontSize="large"
            />
          </Grid>
          <Grid className={styles.cards}>
            <h5 className={styles.textCard}>
              Ui <br />
              Design
            </h5>
            <AlignHorizontalLeftIcon
              className={styles.icons}
              fontSize="large"
            />
          </Grid>
        </Grid>
      </Box>
      <div className={styles.yellowContainer}>
        <div className={styles.fontYellow}></div>
        <div className={styles.fontWhite}>
          <Grid
            container
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start"
            className={styles.containerCard}
          >
            <Avatar
              sx={{
                marginLeft: '117px',
                marginBottom: '5px',
                marginTop: '10px',
                bgcolor: '#ffff02'
              }}
            >
              <ShareIcon
                fontSize="large"
                sx={{ color: 'white', padding: '5px' }}
              />
            </Avatar>
            <Typography
              className={styles.numberCard}
              sx={{ paddingBottom: '0px' }}
            >
              {' '}
              +30{' '}
            </Typography>
            <Typography className={styles.cardText}>Shared Maps</Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start"
            className={styles.containerCard}
          >
            <Avatar
              sx={{
                marginLeft: '117px',
                marginBottom: '5px',
                marginTop: '10px',
                bgcolor: '#ffff02'
              }}
            >
              <InsertEmoticonIcon
                fontSize="large"
                sx={{ color: 'white', padding: '5px' }}
              />
            </Avatar>
            <Typography
              className={styles.numberCard}
              sx={{ paddingBottom: '0px' }}
            >
              {' '}
              +50{' '}
            </Typography>
            <Typography className={styles.cardText}>Happy Clients</Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start"
            className={styles.containerCard}
          >
            <Avatar
              sx={{
                marginLeft: '117px',
                marginBottom: '5px',
                marginTop: '10px',
                bgcolor: '#ffff02'
              }}
            >
              <MapIcon
                fontSize="large"
                sx={{ color: 'white', padding: '5px' }}
              />
            </Avatar>
            <Typography
              className={styles.numberCard}
              sx={{ paddingBottom: '0px' }}
            >
              {' '}
              +50{' '}
            </Typography>
            <Typography className={styles.cardText}>Maps Created</Typography>
          </Grid>
        </div>
      </div>
    </Box>
  );
}
