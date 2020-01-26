import { takeLatest, call, put } from "redux-saga/effects";
import network from "../network";
import { addPolice, getPolice } from "../actions/police";

function* addPoliceEffect({ payload: data }) {
  try {
    const response = yield call(network, {
      url: "/police",
      method: "POST",
      data
    });

    yield put(addPolice.success(response.data));
  } catch (e) {
    yield put(addPolice.failure(e));
  }
}

function* addPoliceWatcher() {
  yield takeLatest(addPolice.request, addPoliceEffect);
}

function* getPoliceEffect({ payload: data }) {
  try {
    const response = yield call(network, {
      url: "/police",
      method: "GET"
    });

    yield put(getPolice.success(response));
  } catch (e) {
    yield put(getPolice.failure(e));
  }
}

function* getPoliceWatcher() {
  yield takeLatest(getPolice.request, getPoliceEffect);
}

export default [addPoliceWatcher, getPoliceWatcher];
