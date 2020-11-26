import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import { createCleanStore } from "./store/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createCleanStore()}>
      <Router>
        <ThemeProvider theme={{}}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
