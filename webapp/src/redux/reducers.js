import policeReducer from "./reducers/police";
import criminalsReducer from "./reducers/criminals";
import effortsReducer from "./reducers/effort";

const reducers = {
  police: policeReducer,
  criminals: criminalsReducer,
  effort: effortsReducer
};

export default reducers;
