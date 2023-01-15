import styles from '../LandingPage.module.css';
import { Typography, Avatar, Grid } from '@mui/material';
import { Box } from '@mui/system';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ShareIcon from '@mui/icons-material/Share';
import MapIcon from '@mui/icons-material/Map';

export default function YellowBar() {
  return (
    <div className={styles.yellowContainer}>
      <div className={styles.fontYellow}></div>
      <div className={styles.fontWhite}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                sx={{
                  bgcolor: '#F4F5F7',
                  padding: '25px'
                }}
              >
                <ShareIcon
                  fontSize="large"
                  sx={{ color: '#000', padding: '5px' }}
                />
              </Avatar>
              <Typography>+30</Typography>
              <Typography>Shared Maps</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                sx={{
                  bgcolor: '#F4F5F7',
                  padding: '25px'
                }}
              >
                <InsertEmoticonIcon
                  fontSize="large"
                  sx={{ color: '#000', padding: '5px' }}
                />
              </Avatar>
              <Typography>+50</Typography>
              <Typography>Happy Clients</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                sx={{
                  bgcolor: '#F4F5F7',
                  padding: '25px'
                }}
              >
                <MapIcon
                  fontSize="large"
                  sx={{ color: '#000', padding: '5px' }}
                />
              </Avatar>
              <Typography>+50</Typography>
              <Typography>Maps Created</Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
