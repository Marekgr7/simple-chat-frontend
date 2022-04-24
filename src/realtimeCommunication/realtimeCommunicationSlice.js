import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  ownSocketId: null,
};

export const realtimeCommunicationSlice = createSlice({
  name: "realtimeCommunication",
  initialState,
  reducers: {
    setOwnSocketId: (state, action) => {
      state.ownSocketId = action.payload;
    },
  },
});

export const { setOwnSocketId } = realtimeCommunicationSlice.actions;

export default realtimeCommunicationSlice.reducer;
