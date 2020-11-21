import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import { useAppHooks } from "./components/containers/AppContainer/AppHooks";
import FoodContainer from "./components/containers/FoodContainer/FoodContainer";
import Home from "./components/Home/Home";

const App = () => {
  const { state } = useAppHooks();
  const history = useHistory();
  return (
    <>
      <button onClick={() => history.push("/exercises")}>Exercises</button>
      <button onClick={() => history.push("/food")}>Food</button>
      <button onClick={() => history.push("/")}>Home</button>

      <pre>{JSON.stringify({ state }, null, 2)}</pre>
      <Switch>
        <Route component={FoodContainer} path="/food" />
        <Route component={Home} path="/" />
      </Switch>
    </>
  );
};

export default App;
