import { createStore, combineReducers } from "redux";

import appReducer from "./app";

export const createCleanStore = () =>
  createStore(combineReducers({ app: appReducer }));
