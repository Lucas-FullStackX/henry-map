import {
  Typography,
  Avatar,
  Grid,
  BoxProps,
  Paper,
  PaperProps,
  Container
} from '@mui/material';
import { Box } from '@mui/system';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ShareIcon from '@mui/icons-material/Share';
import MapIcon from '@mui/icons-material/Map';
import { styled } from '@mui/material/styles';

const YellowContainer = styled(Box)<BoxProps>(() => ({
  width: '100%',
  minHeight: '30vh',
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
}));
const BoxYellowBar = styled(Box)<BoxProps>(() => ({
  width: '100%',
  height: '150px',
  background: '#ffff02',
  position: 'absolute',
  top: 0,
  zIndex: '0'
}));
const WhiteBox = styled(Paper)<PaperProps>(({ theme }) => ({
  padding: theme.spacing(3),
  margin: 'auto',
  [theme.breakpoints.down('md')]: {
    marginTop: '40px'
  }
}));
export default function YellowBar() {
  return (
    <YellowContainer>
      <BoxYellowBar />
      <Container sx={{ zIndex: '1' }}>
        <WhiteBox>
          <Grid
            container
            spacing={3}
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
        </WhiteBox>
      </Container>
    </YellowContainer>
  );
}
