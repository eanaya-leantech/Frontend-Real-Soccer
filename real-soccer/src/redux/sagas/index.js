import { all } from "redux-saga/effects";
/**
 * import all the sagas that you need in this file
 */

import UserSagas from "./userSagas";
import AuthSagas from "./authSagas";
import RegisterSagas from "./registerSagas";
import ForgotPasswordSagas from "./forgotPasswordSagas";
import ResetPasswordSagas from "./resetPasswordSagas";

function* rootSaga() {
  yield all([UserSagas(), AuthSagas(), RegisterSagas(), ForgotPasswordSagas(), ResetPasswordSagas()]);
}

export default rootSaga;
