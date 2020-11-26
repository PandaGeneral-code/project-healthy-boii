import { combineReducers, createStore } from "redux";
import appReducer from "./app";
import utilsReducer from "./utils";

export const createCleanStore = () =>
  createStore(combineReducers({ app: appReducer, utils: utilsReducer }));
