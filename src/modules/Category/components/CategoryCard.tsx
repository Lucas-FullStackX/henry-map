import { Card, Typography, Grid } from '@mui/material';
import { GetCategoryDetailQuery } from '../../../shared/types/generated';

export default function CategoryCard({
  roadMap
}: {
  roadMap: GetCategoryDetailQuery['getCategory']['roadMapsList'][0];
}) {
  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          padding: '15px',
          height: '20vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h6" textAlign="center">
          {roadMap.name}
        </Typography>
        <Typography variant="subtitle2" textAlign="right">
          {roadMap.user.name}
        </Typography>
      </Card>
    </Grid>
  );
}
