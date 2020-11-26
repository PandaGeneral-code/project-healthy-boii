import { Button } from "@material-ui/core";
import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

import AppBar from "./components/AppBar/AppBar";
import Containers from "./components/containers/index";
import Drawer from "./components/Drawer/Drawer";
import RootWrapper from "./styled";

import { useUtilsHooks } from "./UtilsHooks";

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const {
    state: { isDrawerOpen },
  } = useUtilsHooks();

  return (
    <RootWrapper>
      <AppBar availableContainers={Containers} />
      <Drawer availableContainers={Containers} />
      <pre>{JSON.stringify({ isDrawerOpen }, null, 2)}</pre>
      {Containers.map(({ config: { path, title } }) => (
        <Button
          color="primary"
          key={title}
          onClick={() => history.push(`/${path}`)}
          variant={
            location.pathname.split("/")[1] === path ? "contained" : "outlined"
          }
        >
          {title}
        </Button>
      ))}
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
