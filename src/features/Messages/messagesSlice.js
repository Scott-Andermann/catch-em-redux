import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export const selectMessages = (state) => state.messagesReducer.messages;

export default messagesSlice.reducer;
