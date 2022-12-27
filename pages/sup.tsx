import { Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Switch } from '@mui/material';
// import React from 'react'

export default function supPrueba() {
  return (
    <Paper>
      <div>
        <Switch color="primary"></Switch>
        <button type="button">I am so fucking boring!</button>
        <Button color="primary" variant="contained">
          I am so fucking boring!
        </Button>
        <Button color="secondary" variant="contained">
          I am so fucking boring!
        </Button>
        <Typography variant="h1">RoadMap Henrys</Typography>
      </div>
    </Paper>
  );
}
