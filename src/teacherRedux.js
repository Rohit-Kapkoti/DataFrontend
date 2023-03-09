import { createSlice } from "@reduxjs/toolkit";

const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    teachers: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // NEW
    addTeacherStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addTeacherSuccess: (state, action) => {
      state.isFetching = false;
      state.teachers.push(action.payload);
    },
    addTeacherFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE HOD
    deleteTeacherStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteTeacherSuccess: (state, action) => {
      state.isFetching = false;
      state.teachers.splice(
        state.teachers.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteTeacherFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // GET HODS
    getTeacherStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getTeacherSuccess: (state, action) => {
      state.isFetching = false;
      state.teachers = action.payload;
    },
    getTeacherFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // UPDATE HODS
    updateTeacherStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateTeacherSuccess: (state, action) => {
      state.isFetching = false;
      state.teachers[
        state.teachers.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.teachers;
    },
    updateTeacherFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  addTeacherStart,
  addTeacherSuccess,
  addTeacherFailure,
  getTeacherStart,
  getTeacherSuccess,
  getTeacherFailure,
  deleteTeacherStart,
  deleteTeacherSuccess,
  deleteTeacherFailure,
  updateTeacherStart,
  updateTeacherSuccess,
  updateTeacherFailure,
} = teacherSlice.actions;
export default teacherSlice.reducer;
