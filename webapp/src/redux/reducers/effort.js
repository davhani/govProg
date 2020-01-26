import { createReducer } from "@reduxjs/toolkit";
import { createCase, updateCase } from "redux/actions/effort";

const criminalsReducer = createReducer(
  {
    cases: []
  },
  {
    [createCase]: (state, action) => {
      state.cases.push({});
    },
    [updateCase]: (state, { payload }) => {
      console.log("redux", payload.state);

      state.cases[payload.index] = { ...payload.state };
    }
  }
);

export default criminalsReducer;
