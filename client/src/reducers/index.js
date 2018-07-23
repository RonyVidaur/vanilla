import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";
import userReducer from "./userReducer";

export default combineReducers({
  transaction: transactionReducer,
  user: userReducer
});
