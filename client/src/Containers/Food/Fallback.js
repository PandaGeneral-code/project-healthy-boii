import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { subComponents } from "./_config";

const Fallback = () => {
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (!subComponents.map(({ path }) => path).includes(params.component))
      history.push("/food");
  }, [history, params.component]);

  return (
    <>
      <div>Nothing to see.</div>
    </>
  );
};

export default Fallback;
