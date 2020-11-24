import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import App from "./App";

import GlobalStyle from "./components/GlobalStyle/GlobalStyle";

import createCleanStore from "./store/app";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={createCleanStore()}>
      <GlobalStyle />
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
