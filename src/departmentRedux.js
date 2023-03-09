import { createSlice } from "@reduxjs/toolkit";

const departmentSlice = createSlice({
  name: "department",
  initialState: {
    departments: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // GET STUDENT

    getDepartmentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getDepartmentSuccess: (state, action) => {
      state.isFetching = false;
      state.departments = action.payload;
    },
    getDepartmentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // DELETE STUDENTS
    deleteDepartmentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteDepartmentSuccess: (state, action) => {
      state.isFetching = false;
      state.departments.splice(
        state.departments.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteDepartmentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // UPDATE STUDENT
    updateDepartmentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateDepartmentSuccess: (state, action) => {
      state.isFetching = false;
      state.departments[
        state.departments.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.departments;
    },
    updateDepartmentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getDepartmentStart,
  getDepartmentSuccess,
  getDepartmentFailure,
  deleteDepartmentStart,
  deleteDepartmentSuccess,
  deleteDepartmentFailure,
  updateDepartmentStart,
  updateDepartmentSuccess,
  updateDepartmentFailure,
} = departmentSlice.actions;

export default departmentSlice.reducer;
