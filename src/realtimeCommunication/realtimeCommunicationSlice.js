import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  socketId: null,
};

export const realtimeCommunicationSlice = createSlice({
  name: "realtimeCommunication",
  initialState,
  reducers: {
    setSocketId: (state, action) => {
      state.socketId = action.payload;
    },
  },
});

export const { setSocketId } = realtimeCommunicationSlice;

export default realtimeCommunicationSlice.reducer;
