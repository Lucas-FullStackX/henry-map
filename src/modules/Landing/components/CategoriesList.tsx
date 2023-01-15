import { Grid, Typography } from '@mui/material';
import CardSkeleton from '../../../shared/components/Skeletons/CardSkeleton';
import { useGetCategoriesListQuery } from '../../../shared/types/generated';
import CardCategory from './CardCategory';

export default function CategoriesList() {
  const { data, loading } = useGetCategoriesListQuery();
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
        <Typography variant="h3" fontWeight={800} gutterBottom>
          Discover the learning paths
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {data?.categoriesList?.items && !loading ? (
            data.categoriesList.items.map((category, index) => (
              <CardCategory
                key={category.id}
                category={category}
                index={index}
              />
            ))
          ) : (
            <CardSkeleton num={8} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
