import React from "react";

import App from "./App";
import AppContextProvider from "./AppContext";

const AppContainer = () => (
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

export default AppContainer;
