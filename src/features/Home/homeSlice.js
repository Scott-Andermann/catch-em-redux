import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Unknown",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addName: (state, action) => {
      console.log(action.payload);
      state.name = action.payload;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { addName, changeName } = homeSlice.actions;

export const selectName = (state) => state.homeReducer.name;

export default homeSlice.reducer;
