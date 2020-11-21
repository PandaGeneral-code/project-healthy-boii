import { createContext, useMemo, useReducer } from "react";

export const FoodContext = createContext();

const initialState = { selectedFood: null };

const foodReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    default:
      return state;
  }
};

const FoodContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(foodReducer, initialState);

  const [memDispatch, memState] = useMemo(() => [dispatch, state], [
    dispatch,
    state,
  ]);

  return (
    <FoodContext.Provider value={{ dispatch: memDispatch, state: memState }}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
