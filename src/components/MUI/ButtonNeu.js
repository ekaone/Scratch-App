import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },
  button: {
    borderRadius: 10,
    boxShadow: `-2px -2px 8px rgba(255, 255, 255, 1), 
                -2px -2px 12px rgba(255, 255, 255, 0.5),
                inset 2px 2px 4px rgba(255, 255, 255, 0.1),
                2px 2px 8px rgba(0, 0, 0, .15)`
  }
})

export default function ButtonNeu() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.container}>
        <Button className={classes.button}>Button Neu</Button>
      </div>  
    </>
  )
}
