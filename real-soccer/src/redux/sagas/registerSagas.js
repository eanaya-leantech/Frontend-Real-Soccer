import * as actionsTypes from "../actions/actionsTypes";
import { put, call, takeEvery } from "redux-saga/effects";
import API from "../../API";
import * as registerActions from "../actions/registerActions";

function* register({ payload }) {
  try {
    const response = yield call(API.authService.register, payload);
    yield put(registerActions.registerSuccess(response));
  } catch (err) {
    yield put(registerActions.registerError('Error sending data'));
  }
}

export default function* registerSagas() {
  yield takeEvery(actionsTypes.REGISTER_START, register);
}
