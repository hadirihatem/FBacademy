import { combineReducers } from "redux";
import authReducer from "./authReducer";
import changeState from "./sidebarReducer"



const rootReducer= combineReducers({
  auth: authReducer,
  nav: changeState,

});
 export default rootReducer;
