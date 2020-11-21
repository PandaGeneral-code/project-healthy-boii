import { createContext, useMemo, useReducer } from "react";

export const AppContext = createContext();

export const initialState = { profile: "default" };

export const PROFILE_SET = "boii/app/PROFILE_SET";

const appReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case PROFILE_SET:
      return { ...state, profile: payload.profile };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const [memDispatch, memState] = useMemo(() => [dispatch, state], [
    dispatch,
    state,
  ]);

  return (
    <AppContext.Provider value={{ dispatch: memDispatch, state: memState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
