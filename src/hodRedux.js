import { createSlice } from "@reduxjs/toolkit";

const hodSlice = createSlice({
  name: "hod",
  initialState: {
    hods: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // NEW
    addHodStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addHodSuccess: (state, action) => {
      state.isFetching = false;
      state.hods = action.payload;
    },
    addHodFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // DELETE HOD
    deleteHodStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteHodSuccess: (state, action) => {
      state.isFetching = false;
      state.hods.splice(
        state.hods.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteHodFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // GET HODS
    getHodStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getHodSuccess: (state, action) => {
      state.isFetching = false;
      state.hods = action.payload;
    },
    getHodFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },


    // UPDATE HODS
    updateHodStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateHodSuccess: (state, action) => {
      state.isFetching = false;
      state.hods[
        state.hods.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.hods;
    },
    updateHodFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  addHodStart,
  addHodSuccess,
  addHodFailure,
  deleteHodStart,
  deleteHodSuccess,
  deleteHodFailure,
  getHodStart,
  getHodSuccess,
  getHodFailure,
  updateHodStart,
  updateHodSuccess,
  updateHodFailure,
} = hodSlice.actions;
export default hodSlice.reducer;
