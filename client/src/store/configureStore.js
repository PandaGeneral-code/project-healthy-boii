import { combineReducers, createStore } from "redux";

import appReducer from "./app";

export const createCleanStore = () =>
  createStore(combineReducers({ app: appReducer }));
