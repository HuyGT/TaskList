import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducers from "../reducers";

const store =
  process.env.NODE_ENV === "production"
    ? createStore(appReducers)
    : createStore(appReducers, composeWithDevTools());

export default store;
