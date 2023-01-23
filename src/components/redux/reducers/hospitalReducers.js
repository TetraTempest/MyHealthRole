import { createSlice } from "@reduxjs/toolkit";

export const hospitals = createSlice({
  name: "hospitals",
  initialState: {
    hospitals: [],
  },

  reducers: {
    setHospitales: (state, action) => {
      state.hospitals = action.payload;
    },
  },
});

export const { setHospitales } = hospitals.actions;

export default hospitals.reducer;
