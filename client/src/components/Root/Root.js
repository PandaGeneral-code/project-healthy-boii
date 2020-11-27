import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { useUtilsHooks } from "../../hooks/UtilsHooks";

const Root = () => {
  const history = useHistory();
  const params = useParams();
  const {
    state: { availableContainers },
  } = useUtilsHooks();

  useEffect(() => {
    if (params.container) {
      !availableContainers.find(
        ({ config: { path } }) => path === params.container
      ) && history.push("/home");
    } else {
      history.push("/home");
    }
  }, [availableContainers, history, params.container]);

  return (
    <>
      <div>Root</div>
    </>
  );
};

export default Root;
