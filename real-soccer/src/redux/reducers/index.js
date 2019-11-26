import { combineReducers } from "redux";

import { signProccess } from "./authReducers";

import { register } from "./registerReducer";

export default combineReducers({
  signProccess,
  register
});
