import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Divider from '@material-ui/core/Divider';
import InputTag from './InputTag'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

function Tag() {

  const createTags = (props) => (
    <Chip
      icon={<FaceIcon />}
      label="Clickable deletable"
      onClick={handleClick}
      onDelete={handleDelete}
      variant="outlined"
      deleteIcon={<DoneIcon style={{ color: "green" }} />}
    />
  )

  const classes = useStyles();
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <>
      <InputTag />
      <Divider />
      <div className={classes.root}>
        { createTags() }
      </div>
    </>
  )
}

export default Tag
