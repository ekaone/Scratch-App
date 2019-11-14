import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputTag(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.margin}>
        <Grid container spacing={1} justify="center" alignItems="flex-end">
          <Grid item>
            <LocalOfferIcon color="primary" />
          </Grid>
          <Grid item>
            <TextField 
              id="input-with-icon-grid" 
              label="Tags..." 
              value={props.values}
              onChange={props.handlerChange}  
            />
          </Grid>
          <Grid item>
            <AddCircleOutlineIcon 
              color="primary" 
              onClick={props.handlerClick}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
