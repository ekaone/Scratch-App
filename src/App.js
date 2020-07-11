import React from "react";
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import {
  // Pages,
  // SocketView,
  // DropZoneFile
  // FirebaseConnect,
  // MapPortal,
  // MapBoxGL,
  // Interact,
  // ReactDnD,
  // MUI,
  // Voice,
  // VideoPlayer
  // ReactQuery
  // ReactInfiniteCalendar
  // ReactVirtualized
  // ReactStrap
  // Cards
  // SyntaxHighlighter
  // Markdown
  // ReactCalendar
  // Camera
  BeautyStars
} from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";

// const theme = createMuiTheme({
//   palette: {
//     type: "dark"
//   }
// });

function App() {
  return (
    <>
      {/* <MuiThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <BeautyStars />
      {/* </MuiThemeProvider> */}
    </>
  );
}

export default App;
