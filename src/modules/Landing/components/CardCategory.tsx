import { Typography } from '@mui/material';
import { GetCategoriesListQuery } from '../../../shared/types/generated';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import BaseCard from '../../../shared/components/BaseCard';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
export default function CardCategory({
  category,
  index
}: {
  category: GetCategoriesListQuery['categoriesList']['items'][0];
  index: number;
}) {
  const router = useRouter();
  const icons = [
    {
      icon: <AlignVerticalCenterIcon fontSize="large" />
    },
    {
      icon: <AlignVerticalBottomIcon fontSize="large" />
    },
    { icon: <AlignVerticalTopIcon fontSize="large" /> },
    {
      icon: <AlignHorizontalLeftIcon fontSize="large" />
    }
  ];
  return (
    <BaseCard onClick={() => router.push(`/category/${category.id}`)}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        sx={{ height: '100%', width: '100%' }}
      >
        <Typography variant="h5" fontWeight={600}>
          {category.name}
        </Typography>
        {icons[index % icons.length].icon}
      </Box>
    </BaseCard>
  );
}
