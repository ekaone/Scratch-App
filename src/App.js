import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  // Pages,
  // SocketView,
  // DropZoneFile,
  // FirebaseConnect,
  // MapPortal,
  // MapBoxGL,
  // Interact,
  // ReactDnD,
  MUI
} from './components'

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});


function App() {
  return (
    <>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <MUI />
      </MuiThemeProvider>
    </>
  );
}

export default App;
