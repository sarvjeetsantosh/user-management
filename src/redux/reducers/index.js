import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import authReducer from "./AuthReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  auth: authReducer,
});

export default rootReducer;
