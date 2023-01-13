import { Card, Typography, Grid } from '@mui/material';
import { GetCategoryDetailQuery } from '../../../shared/types/generated';
import { Box } from '@mui/system';
import Link from 'next/link';

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
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ height: '100%' }}
        >
          <Link href={`/road-map/${roadMap.id}`}>{roadMap.name}</Link>
        </Box>
        <Typography variant="subtitle2" textAlign="right">
          {roadMap.user.name}
        </Typography>
      </Card>
    </Grid>
  );
}
