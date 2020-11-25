import React from "react";
import { useRouteMatch } from "react-router-dom";

const Recipes = () => {
  const { params } = useRouteMatch();

  return (
    <div>
      <div>Recipes</div>
      <pre>{JSON.stringify(params.foodSubcategory, null, 2)}</pre>
    </div>
  );
};

export default Recipes;
