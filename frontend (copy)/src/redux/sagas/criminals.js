import { takeLatest, call, put } from "redux-saga/effects";
import network from "../network";
import { addCriminals, getCriminals } from "../actions/criminals";

function* addCriminalsEffect({ payload: data }) {
  try {
    const response = yield call(network, {
      url: "/criminals",
      method: "POST",
      data
    });

    yield put(addCriminals.success(response.data));
  } catch (e) {
    yield put(addCriminals.failure(e));
  }
}

function* addCriminalsWatcher() {
  yield takeLatest(addCriminals.request, addCriminalsEffect);
}

function* getCriminalsEffect({ payload: data }) {
  try {
    const response = yield call(network, {
      url: "/criminals",
      method: "GET"
    });

    yield put(getCriminals.success(response));
  } catch (e) {
    yield put(getCriminals.failure(e));
  }
}

function* getCriminalsWatcher() {
  yield takeLatest(getCriminals.request, getCriminalsEffect);
}

export default [addCriminalsWatcher, getCriminalsWatcher];
