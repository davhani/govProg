import { createReducer } from "@reduxjs/toolkit";
import { getPolice } from "redux/actions/police";

const policeReducer = createReducer(
  {},
  {
    [getPolice.success]: (state, action) => {
      state.list = action.payload;
    }
  }
);

export default policeReducer;
