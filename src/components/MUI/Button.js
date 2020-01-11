import React from 'react'
import { MuiThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center',
  },

  btn: {
    border: 'none',
    margin: 20,
    width: 250,
    height: 65,
    borderRadius: 6,
    textTransform: 'uppercase',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    cursor: 'pointer',
    color: '#fff',
    backgroundSize: '200%',
    transition: '0.4s',
    '&:hover': {
      backgroundPosition: 'right'
    }
  },
  btn1: {
    backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00a8ff)'
  },
  btn2: {
    backgroundImage: 'linear-gradient(to left,#C4E538,#009432,#C4E538)'
  },
  btn3: {
    backgroundImage: 'linear-gradient(to left,#12CBC4,#0652DD,#12CBC4)'
  },
  btn4: {
    backgroundImage: 'linear-gradient(-45deg, #FDA7DF, #c23616, #FDA7DF)'
  },
})

export default function Buttons() {
  const classes = useStyles()

  return (
    <>
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <div className={classes.container}>
          <Button className={ `${classes.btn} ${classes.btn1}` }>Hover button</Button>
          <Button className={ `${classes.btn} ${classes.btn2}` }>Hover button</Button>
          <Button className={ `${classes.btn} ${classes.btn3}` }>Hover button</Button>
          <Button className={ `${classes.btn} ${classes.btn4}` }>Hover button</Button>
        </div>
      </MuiThemeProvider>
    </>
  )
}
