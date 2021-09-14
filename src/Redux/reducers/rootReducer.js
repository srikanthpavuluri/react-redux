import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import productReducer from "./productReducer";

export default combineReducers({
  account: accountReducer,
  product: productReducer,
});
