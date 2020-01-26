import { createAction } from "@reduxjs/toolkit";

const createActions = type => ({
  request: createAction(`${type}/request`),
  success: createAction(`${type}/success`),
  failure: createAction(`${type}/failure`)
});

export default createActions;
