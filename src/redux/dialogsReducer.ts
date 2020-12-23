import { ActionsTyps, DialogsPageType } from "./state";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const dialogsReducer = (state: DialogsPageType, action: ActionsTyps) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messagesData.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreater = () => ({ type: SEND_MESSAGE } as const);
export const updateNewMessageBodyCreater = (body: string) =>
  ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  } as const);

export default dialogsReducer;
