import { takeLatest, call, put, select } from "redux-saga/effects";
import network from "../network";
import { addEffort } from "../actions/effort";

function* addEffortEffect({ payload: data }) {
  const cases = yield select(state => state.effort.cases);
  try {
    const response = yield call(network, {
      url: "/effort",
      method: "POST",
      data: { ...data, cases }
    });

    yield put(addEffort.success(response.data));
  } catch (e) {
    yield put(addEffort.failure(e));
  }
}

function* addEffortWatcher() {
  yield takeLatest(addEffort.request, addEffortEffect);
}

export default [addEffortWatcher];
