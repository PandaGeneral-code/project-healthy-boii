import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import AppContainer from "./components/containers/AppContainer/AppContainer";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <AppContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
