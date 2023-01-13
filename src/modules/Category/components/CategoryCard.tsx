import { Card, Typography, Grid, CardActionArea } from '@mui/material';
import { GetCategoryDetailQuery } from '../../../shared/types/generated';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

export default function CategoryCard({
  roadMap
}: {
  roadMap: GetCategoryDetailQuery['getCategory']['roadMapsList'][0];
}) {
  const router = useRouter();
  return (
    <Grid item xs={12} md={4}>
      <Card onClick={() => router.push(`/road-map/${roadMap.id}`)}>
        <CardActionArea
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
            <Typography variant="h5">{roadMap.name}</Typography>
          </Box>
          <Typography variant="subtitle2" textAlign="right">
            {roadMap.user.name}
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
