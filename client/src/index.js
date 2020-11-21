import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";

import AppContainer from "./AppContainer";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import { createCleanStore } from "./store/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={createCleanStore()}>
      <Router>
        <ThemeProvider theme={{}}>
          <GlobalStyle />
          <AppContainer />
        </ThemeProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
