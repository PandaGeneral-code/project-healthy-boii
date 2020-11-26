import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import FoodSubComponentContainer from "./FoodSubComponentContainer/FoodSubComponentContainer";

const Food = () => {
  const routeMatch = useRouteMatch();

  return (
    <>
      <div>
        <Link to={`${routeMatch.url}/recipes`}>Recipes</Link>
        <Link to={`${routeMatch.url}/food-items`}>Food Items</Link>
        <Switch>
          <Route
            component={FoodSubComponentContainer}
            path={`${routeMatch.url}/:foodSubcategory`}
          />
        </Switch>
      </div>
    </>
  );
};

export default Food;
