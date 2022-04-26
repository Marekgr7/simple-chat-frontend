import store from "../../../store/store";
import { removeSpecificMessage } from "../../../MessengerPage/messengerSlice";

const removeSpecificMessageFromLocalStore = ({
  messageId,
  chatHistorySocketId,
}) => {
  store.dispatch(
    removeSpecificMessage({
      messageId,
      chatHistorySocketId,
    })
  );
};

export default removeSpecificMessageFromLocalStore;
