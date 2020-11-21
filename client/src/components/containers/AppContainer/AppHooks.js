import { useCallback, useContext } from "react";

import { AppContext, SET_PROFILE } from "./AppState";

export const useAppHooks = () => {
  const { dispatch, state } = useContext(AppContext);

  return {
    setProfile: useCallback(
      (profile) => dispatch({ payload: { profile }, type: SET_PROFILE }),
      [dispatch]
    ),
    state,
  };
};
