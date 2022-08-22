import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changeUsers: (state, action) => {
    //   console.log(action.payload);
      state.users = action.payload;
    },
  },
});

export const { changeUsers } = usersSlice.actions;

export const selectUsers = (state) => state.usersReducer.users;

export default usersSlice.reducer;
