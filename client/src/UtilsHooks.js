import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SET_DRAWER_OPEN_STATE } from "./store/utils";

export const useUtilsHooks = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.utils);

  return {
    setDrawerOpenState: useCallback(
      (drawerOpenState) =>
        dispatch({ payload: { drawerOpenState }, type: SET_DRAWER_OPEN_STATE }),
      [dispatch]
    ),
    state,
  };
};
