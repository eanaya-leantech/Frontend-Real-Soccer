import * as actionsTypes from "../actions/actionsTypes";
import { put, call, takeEvery } from "redux-saga/effects";
import API from "../../API";
import * as forgotPasswordActions from "../actions/forgotPasswordActions";

function* forgotPassword({ payload }) {
  try {
    const response = yield call(API.authService.forgotPassword, payload);
    yield put(forgotPasswordActions.recoverPasswordSuccess(response));
  } catch (err) {
    yield put(forgotPasswordActions.recoverPasswordError('Error sending data'));
  }
}

export default function* forgotPasswordSagas() {
  yield takeEvery(actionsTypes.RECOVER_PASSWORD_START, forgotPassword);
}