import React from "react";

import Food from "./Food";
import FoodContextProvider from "./FoodState";

const FoodContainer = () => (
  <FoodContextProvider>
    <Food />
  </FoodContextProvider>
);

export default FoodContainer;
