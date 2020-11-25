import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import Recipes from "../../Recipes/Recipes";

const Food = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <div>
        <div>Food</div>
        <Link to={`${url}/recipes`}>Recipes</Link>
        <Switch>
          <Route component={Recipes} path={`${url}/:foodSubcategory`} />
        </Switch>
      </div>
    </>
  );
};

export default Food;
