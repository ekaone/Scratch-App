import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';  

function Pages() {

  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });
  
  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      textAlign: "center"
    },
    clr: {
      color: "yellow"
    }
  }));

  const classes = useStyles();

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3" className={classes.clr}>
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </MuiThemeProvider>
    </>
  )
}

export default Pages
