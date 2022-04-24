import { configureStore } from "@reduxjs/toolkit";
import messengerReducer from "../MessengerPage/messengerSlice";
import realtimeCommunicationReducer from "../realtimeCommunication/realtimeCommunicationSlice";

const store = configureStore({
  reducer: {
    messenger: messengerReducer,
    realtimeCommunication: realtimeCommunicationReducer,
    devTools: true,
  },
});

export default store;
