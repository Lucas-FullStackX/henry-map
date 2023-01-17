import styles from '../styles/Home.module.css';
// import FocusGraph from '../src/RoadMap/Graph';
import { useFetchMapListQuery } from '../src/shared/types/generated';
import { Typography, Container, CircularProgress, Box } from '@mui/material';

export default function MapsList() {
  const { data, loading } = useFetchMapListQuery();
  return (
    <div className={styles.container}>
      {data && !loading ? (
        <Container>
          {data.mapsList.items.map(map => (
            <Box key={map.id}>
              <Typography>{map.name}</Typography>
            </Box>
          ))}
        </Container>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
