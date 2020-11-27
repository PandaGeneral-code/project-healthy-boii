import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  SET_AVAILABLE_CONTAINERS,
  SET_DRAWER_VISIBILITY,
} from "../store/utils";

export const useUtilsHooks = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.utils);

  return {
    setAvailableContainers: useCallback(
      (availableContainers) =>
        dispatch({
          payload: { availableContainers },
          type: SET_AVAILABLE_CONTAINERS,
        }),
      [dispatch]
    ),
    setDrawerVisibility: useCallback(
      (drawerVisibility) =>
        dispatch({
          payload: { drawerVisibility },
          type: SET_DRAWER_VISIBILITY,
        }),
      [dispatch]
    ),
    state,
  };
};
