import React from "react";
import { Route, Switch } from "react-router-dom";

import Root from "./components/Root/Root";
import { useUtilsHooks } from "./hooks/UtilsHooks";
import RootWrapper from "./styled";

const App = () => {
  const {
    state: { availableContainers },
  } = useUtilsHooks();

  return (
    <RootWrapper>
      <Switch>
        {availableContainers.map(({ Component, config: { path } }) => (
          <Route component={Component} key={path} path={`/${path}`} />
        ))}
        <Route component={Root} path="/:container?" />
      </Switch>
    </RootWrapper>
  );
};

export default App;
