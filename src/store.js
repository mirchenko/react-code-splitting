import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";

let composeEnhancers = compose;
let preloadedState = {};

if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  preloadedState = window.INITIAL_STATE || {};
  delete window.INITIAL_STATE;
}

export default createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(reduxThunk),
  ),
);
