import { useContext } from "react";

import { FoodContext } from "./FoodState";

export const useFoodHooks = () => {
  const { state } = useContext(FoodContext);

  return { state };
};
