import { Typography } from '@mui/material';
import { GetCategoryDetailQuery } from '../../../shared/types/generated';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import BaseCard from '../../../shared/components/BaseCard';

export default function CategoryCard({
  roadMap
}: {
  roadMap: GetCategoryDetailQuery['getCategory']['roadMapsList'][0];
}) {
  const router = useRouter();
  return (
    <BaseCard onClick={() => router.push(`/road-map/${roadMap.id}`)}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        <Typography variant="h4">{roadMap.name}</Typography>
      </Box>
      <Typography variant="subtitle2" textAlign="right">
        {roadMap.user.name}
      </Typography>
    </BaseCard>
  );
}
