import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { resourceReducer } from "../Reducers/HomePageReducer";
import { resourceDetailsReducer } from "../Reducers/ResourcePageReducer";
const parentReducer = combineReducers({
  allResources: resourceReducer,
  details: resourceDetailsReducer,
});
export const store = createStore(
  parentReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
