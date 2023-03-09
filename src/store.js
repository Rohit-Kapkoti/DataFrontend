import { combineReducers, configureStore } from "@reduxjs/toolkit";

import studentReducer from "./studentRedux";
import teacherReducer from "./teacherRedux";
import hodReducer from "./hodRedux";
import departmentReducer from "./departmentRedux"

const rootReducer = combineReducers({
  student: studentReducer,
  teacher: teacherReducer,
  hod: hodReducer,
  department:departmentReducer
});

export const store = configureStore({
  reducer: rootReducer,
});
