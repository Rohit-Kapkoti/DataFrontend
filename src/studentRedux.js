import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // NEW
    addStudentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addStudentSuccess: (state, action) => {
      state.isFetching = false;
      state.students.push(action.payload);
    },
    addStudentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // GET STUDENT

    getStudentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getStudentSuccess: (state, action) => {
      state.isFetching = false;
      state.students = action.payload;
    },
    getStudentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // DELETE STUDENTS
    deleteStudentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteStudentSuccess: (state, action) => {
      state.isFetching = false;
      state.students.splice(
        state.students.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteStudentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // UPDATE STUDENT
    updateStudentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateStudentSuccess: (state, action) => {
      state.isFetching = false;
      state.students[
        state.students.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.students;
    },
    updateStudentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  addStudentStart,
  addStudentSuccess,
  addStudentFailure,
  getStudentStart,
  getStudentSuccess,
  getStudentFailure,
  updateStudentStart,
  updateStudentSuccess,
  updateStudentFailure,
  deleteStudentStart,
  deleteStudentSuccess,
  deleteStudentFailure,
} = studentSlice.actions;
export default studentSlice.reducer;
