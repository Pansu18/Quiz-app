import { combineReducers } from "redux";
import user from "./userReducer";
import loading from "./loadingReducer";
import errors from "./errorReducers";

export default combineReducers({
  user,
  loading,
  errors,
});
