import { combineReducers, createStore } from "redux";

import utilsReducer from "./utils";

export const createCleanStore = () =>
  createStore(combineReducers({ utils: utilsReducer }));
