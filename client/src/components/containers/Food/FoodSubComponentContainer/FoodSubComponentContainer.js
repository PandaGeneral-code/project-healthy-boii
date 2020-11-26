import React from "react";
import { useRouteMatch } from "react-router-dom";

import Recipes from "../../../Recipes/Recipes";

const FoodSubComponentContainer = () => {
  const routeMatch = useRouteMatch();

  return <>{routeMatch.params.foodSubcategory === "recipes" && <Recipes />}</>;
};

export default FoodSubComponentContainer;
