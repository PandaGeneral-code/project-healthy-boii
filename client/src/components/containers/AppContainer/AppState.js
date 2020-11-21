import { createContext, useMemo, useReducer } from "react";

export const AppContext = createContext();

const initialState = { profile: null };

export const SET_PROFILE = "boii/app/SET_PROFILE";

const appReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_PROFILE:
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
