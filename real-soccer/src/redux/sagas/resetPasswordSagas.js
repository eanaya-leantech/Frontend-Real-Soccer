import * as actionsTypes from "../actions/actionsTypes";
import { put, call, takeEvery } from "redux-saga/effects";
import API from "../../API";
import * as resetPasswordActions from "../actions/resetPasswordActions";

function* resetPassword({ payload }) {
  try {
    const response = yield call(API.authService.resetPassword, payload);
    yield put(resetPasswordActions.resetPasswordSuccess(response));
  } catch (err) {
    yield put(resetPasswordActions.resetPasswordError('Error sending data'));
  }
}

export default function* resetPasswordSagas() {
  yield takeEvery(actionsTypes.RESET_PASSWORD_START, resetPassword);
}