import { useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppContext, PROFILE_SET } from "./AppContext";
import { USER_LOGIN, USER_LOGOUT } from "./store/app";

export const useAppHooks = () => {
  const { dispatch, state } = useContext(AppContext);
  const reduxDispatch = useDispatch();
  const { user } = useSelector((state) => state.app);

  return {
    login: useCallback(
      (user) => reduxDispatch({ payload: { user }, type: USER_LOGIN }),
      [reduxDispatch]
    ),
    logout: useCallback(() => reduxDispatch({ type: USER_LOGOUT }), [
      reduxDispatch,
    ]),
    setProfile: useCallback(
      (profile) => dispatch({ payload: { profile }, type: PROFILE_SET }),
      [dispatch]
    ),
    state: { ...state, user },
  };
};
