import { all } from "redux-saga/effects";
import police from "./sagas/police";
import effort from "./sagas/effort";
import criminals from "./sagas/criminals";

const combinedSagas = [...police, ...effort, ...criminals];
const sagas = combinedSagas.map(saga => saga());

export default function* rootSagas() {
  yield all([...sagas]);
}
