import { createStore, combineReducers } from "redux";

import appReducer from "./modules/app";
import foodReducer from "./modules/food";

export const createCleanStore = () =>
  createStore(combineReducers({ app: appReducer, food: foodReducer }));
