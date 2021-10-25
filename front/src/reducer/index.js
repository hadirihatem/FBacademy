import { combineReducers } from "redux";
import authReducer from "./authReducer";
import changeState from "./sidebarReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  nav: changeState,
  user: userReducer,
});
export default rootReducer;
