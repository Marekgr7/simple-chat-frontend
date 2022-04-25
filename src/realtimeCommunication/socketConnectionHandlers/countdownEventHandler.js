import store from "../../store/store";
import { setCountdownDetails } from "../../MessengerPage/messengerSlice";

const countdownEventHandler = (countdownData) => {
  const countdownDetails = store.getState().messenger.countdownDetails;

  if (!countdownDetails) {
    store.dispatch(setCountdownDetails(countdownData));
  }
};

export default countdownEventHandler;
