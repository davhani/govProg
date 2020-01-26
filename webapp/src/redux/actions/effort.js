import { createAction } from "@reduxjs/toolkit";
import createActions from "../asyncAction";

export const createCase = createAction("create/case");
export const updateCase = createAction("updateCase");
export const addEffort = createActions("addEffort");
