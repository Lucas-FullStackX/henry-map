import { Card, Grid, CardActionArea } from '@mui/material';

/**
 * @param root0 - Props.
 * @param root0.num - Number of cards.
 * @returns Component.
 */
export default function BaseCard({
  children,
  onClick
}: {
  children?: JSX.Element | JSX.Element[];
  onClick: () => void;
}): JSX.Element {
  return (
    <Grid item xs={12} md={3}>
      <Card onClick={onClick}>
        <CardActionArea
          sx={{
            padding: '15px',
            height: '20vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          {children}
        </CardActionArea>
      </Card>
    </Grid>
  );
}
