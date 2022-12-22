import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../redux";
const middleware = [thunk];

const configureStore = () => {
  let store = createStore(reducers, applyMiddleware(...middleware));
  return store;
};

export default configureStore();
