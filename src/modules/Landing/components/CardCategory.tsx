import { Card, Typography, Grid, CardActionArea } from '@mui/material';
import { GetCategoriesListQuery } from '../../../shared/types/generated';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

export default function CardCategory({
  category
}: {
  category: GetCategoriesListQuery['categoriesList']['items'][0];
}) {
  const router = useRouter();
  return (
    <Grid item xs={12} md={3}>
      <Card onClick={() => router.push(`/category/${category.id}`)}>
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
            <Typography variant="h5">{category.name}</Typography>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
