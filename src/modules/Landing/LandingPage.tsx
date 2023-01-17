import styles from './LandingPage.module.css';
import { Button, Container, Grid, Link, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import Image from 'next/image';
import CategoriesList from './components/CategoriesList';
import YellowBar from './components/YellowBar';

export default function LadingPage() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <>
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
              This app is designed so that you have a path to follow when
              learning to program.
            </Typography>
            {isAuthenticated ? (
              <Link href="/home">
                <Button variant="contained">Get Started</Button>
              </Link>
            ) : (
              <Button
                onClick={loginWithRedirect}
                variant="contained"
                size="large"
              >
                Get Started
              </Button>
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
        <CategoriesList />
      </Container>
      <YellowBar />
    </>
  );
}
