import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel"
import { Components } from './variables' 
// Components
import Tag from "../Tag"
import Stored from "../Stored"
import Homescreen from '../Homescreen'
import Camera from '../Camera'

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  }
}));

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function Pages() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Tags" {...a11yProps(1)} />
              <Tab label="STORED" {...a11yProps(0)} />
              <Tab label="Homescreen" {...a11yProps(2)} />
              <Tab label="Camera" {...a11yProps(3)} />
              <Tab label="Todo" {...a11yProps(4)} />
              <Tab label="Traffic" {...a11yProps(5)} />
              <Tab label="Other" {...a11yProps(6)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Tag />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Stored />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Homescreen />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Camera />
          </TabPanel>
          <TabPanel value={value} index={4}>
            Todo
          </TabPanel>
          <TabPanel value={value} index={5}>
            Traffic
          </TabPanel>
          <TabPanel value={value} index={6}>
            Other
          </TabPanel>
        </div>
      </MuiThemeProvider>
    </>
  )
}

export default Pages
