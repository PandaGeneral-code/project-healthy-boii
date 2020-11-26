import React from "react";
import { Route, Switch } from "react-router-dom";

import AppBar from "./components/AppBar/AppBar";
import Containers from "./components/containers/index";
import Drawer from "./components/Drawer/Drawer";
import RootWrapper from "./styled";

const App = () => {
  return (
    <RootWrapper>
      <AppBar availableContainers={Containers} />
      <Drawer availableContainers={Containers} />

      <Switch>
        {Containers.map(({ Component, config: { path, title } }) => (
          <Route
            component={Component}
            exact={title === "Home"}
            key={title}
            path={`/${path}`}
          />
        ))}
      </Switch>
    </RootWrapper>
  );
};

export default App;
