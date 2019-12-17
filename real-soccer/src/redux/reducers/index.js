import { combineReducers } from "redux";

import { signProccess } from "./authReducers";

import { register } from "./registerReducer";

import { forgotPassword } from "./forgotPasswordReducer";

import { resetPassword } from "./resetPasswordReducer";

export default combineReducers({
  signProccess,
  register,
  forgotPassword,
  resetPassword  
});
