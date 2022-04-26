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

export function getStoreWithState(preloadedState) {
  return configureStore({
    reducer: {
      messenger: messengerReducer,
      realtimeCommunication: realtimeCommunicationReducer,
    },
    preloadedState,
  });
}

export default store;
