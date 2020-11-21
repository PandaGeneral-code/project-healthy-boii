import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

const Food = () => {
  const params = useParams();
  const route = useRouteMatch();

  return (
    <div>
      <div>Food</div>
      <pre>{JSON.stringify({ params, route }, null, 2)}</pre>
    </div>
  );
};

export default Food;
