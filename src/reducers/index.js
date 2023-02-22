import { combineReducers } from "redux";
import user from "./userReducer";
import questionReducer from "./questionReducer";
import resultsReducer from "./resultsReducer";
// import loading from "./loadingReducer";
import errors from "./errorReducers";

export default combineReducers({
  user,
  questionReducer,
  resultsReducer,
  errors,
});
