import { combineReducers } from "redux";
import authReducer from "./authReducer";
import changeState from "./sidebarReducer";
import userReducer from "./userReducer";
import expenseReducer from "./expenseReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  nav: changeState,
  user: userReducer,
  exp:expenseReducer,
  
});
export default rootReducer;
