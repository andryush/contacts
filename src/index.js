import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./App/App";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
