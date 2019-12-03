import { all } from "redux-saga/effects";
/**
 * import all the sagas that you need in this file
 */

import UserSagas from "./userSagas";
import AuthSagas from "./authSagas";
import RegisterSagas from "./registerSagas";

function* rootSaga() {
  yield all([UserSagas(), AuthSagas(), RegisterSagas()]);
}

export default rootSaga;
