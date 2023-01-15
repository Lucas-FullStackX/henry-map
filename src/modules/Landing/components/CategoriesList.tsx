import styles from '../LandingPage.module.css';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CardSkeleton from '../../../shared/components/Skeletons/CardSkeleton';

export default function CategoriesList() {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{
        height: '40vh'
      }}
    >
      <Grid>
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Discover the learning paths
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Box>
          <Grid container spacing={2}>
            <CardSkeleton num={8} />
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
      </Grid>
    </Grid>
  );
}
