import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import { createCleanStore } from "./store/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={createCleanStore()}>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
