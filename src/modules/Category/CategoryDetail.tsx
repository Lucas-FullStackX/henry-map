import { Typography, Skeleton, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useGetCategoryDetailQuery } from '../../shared/types/generated';
import CategoryCard from './components/CategoryCard';

export default function CategoryDetail({ id }: { id: string }) {
  const { data, loading } = useGetCategoryDetailQuery({
    variables: {
      id: id ?? ''
    }
  });
  console.log(data);
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        {data?.getCategory?.name ?? ''}
      </Typography>
      <Grid container spacing={2}>
        {!loading && data.getCategory.roadMapsList ? (
          data.getCategory.roadMapsList.map(roadMap => {
            return <CategoryCard key={roadMap.id} roadMap={roadMap} />;
          })
        ) : (
          <Skeleton variant="rounded" width={210} height={60} />
        )}
      </Grid>
    </Container>
  );
}
