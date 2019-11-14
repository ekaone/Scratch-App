import React, { useState } from 'react'
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

  const createTags = (v, id) => (
    <Chip
      key={id}
      icon={<FaceIcon />}
      label={v}
      onClick={handleClick}
      onDelete={handleDelete}
      variant="outlined"
      deleteIcon={<DoneIcon style={{ color: "green" }} />}
    />
  )

  const classes = useStyles();

  const [values, setValues] = useState("")
  const [tags, setTags] = useState([
    {id: 1, v: "Default Tag"}
  ])

  const handleChange = (e) => {
    return setValues(e.target.value)
  }

  const handleSave = () => {
    if(values != "") {
      setTags(ps => {
        return [ ...ps, { id: Math.random(), v: values }]
      }) 
    } else {
      return null
    }
  } 
    
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <>
      <InputTag 
        values={values}
        handlerChange={handleChange}
        handlerClick={handleSave}
      />
      <Divider />
      <div className={classes.root}>
        { 
          tags.map(t => {
            return createTags(t.v, t.id)
          }) 
        }
      </div>
    </>
  )
}

export default Tag
