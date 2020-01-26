import { createReducer } from "@reduxjs/toolkit";
import { getCriminals } from "redux/actions/criminals";

const criminalsReducer = createReducer(
  {},
  {
    [getCriminals.success]: (state, action) => {
      state.list = action.payload;
    }
  }
);

export default criminalsReducer;
