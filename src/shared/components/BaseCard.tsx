import { useId } from 'react';
import { Skeleton, Grid } from '@mui/material';

/**
 * @param root0 - Props.
 * @param root0.num - Number of cards.
 * @returns Component.
 */
export default function CardSkeleton({ num }: { num: number }): JSX.Element {
  return (
    <>
      {Array(num)
        .fill(0)
        .map(() => {
          const id = useId();
          return (
            <Grid item xs={12} md={3} key={id}>
              <Skeleton variant="rounded" width={210} height={60} />
            </Grid>
          );
        })}
    </>
  );
}
