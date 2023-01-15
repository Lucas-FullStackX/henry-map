import styles from './LandingPage.module.css';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ShareIcon from '@mui/icons-material/Share';
import MapIcon from '@mui/icons-material/Map';
import { Avatar, Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAuth0 } from '@auth0/auth0-react';
import Image from 'next/image';

export default function LadingPage() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <Container>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{
          height: '80vh'
        }}
      >
        <Grid item md={6} xs={12}>
          <Typography variant="h1" fontWeight={800} gutterBottom>
            RoadMap App
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            This app is designed so that you have a path to follow when learning
            to program.
          </Typography>
          {isAuthenticated ? (
            <Link href="/home">
              <button className={styles.button}>Get Started</button>
            </Link>
          ) : (
            <button
              className={styles.button}
              onClick={() => loginWithRedirect()}
            >
              Get Started
            </button>
          )}
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={styles.circle}>
            <Image
              src="/img/henry-logo-cpy.png"
              alt="henry"
              width={300}
              height={300}
              style={{
                objectFit: 'contain',
                marginLeft: '20px'
              }}
            />
          </div>
        </Grid>
      </Grid>
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
    </Container>
  );
}
