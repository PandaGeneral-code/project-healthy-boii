import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ContainerComponents from "../../components/ContainerComponents/index";
import { subComponents } from "./_config";
import Fallback from "./Fallback";

const Food = () => {
  const { path } = useRouteMatch();
  const [availableSubComponents] = useState(
    ContainerComponents.filter(({ config: { title } }) =>
      subComponents.map(({ title }) => title).includes(title)
    )
  );

  return (
    <>
      <div>Food</div>
      <Switch>
        {availableSubComponents.map(
          ({ Component, config: { path: componentPath } }) => (
            <Route component={Component} path={`${path}/${componentPath}`} />
          )
        )}
        <Route component={Fallback} path={`${path}/:component`} />
      </Switch>
    </>
  );
};

export default Food;
