const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export type DialogsDataType = {
  id: number;
  name: string;
};
export type MessagesDataType = {
  id: number;
  message: string;
};
export type DialogsPageType = {
  messagesData: Array<MessagesDataType>;
  dialogsData: Array<DialogsDataType>;
  newMessageBody: string;
};

let initialState = {
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Whats up?" },
    { id: 3, message: "Shalalala" },
  ],
  dialogsData: [
    { id: 1, name: "Dimas" },
    { id: 2, name: "American Boy" },
    { id: 3, name: "Koresh" },
    { id: 4, name: "Avici" },
    { id: 5, name: "Alinka" },
    { id: 6, name: "Kosya" },
    { id: 7, name: "Gayn" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (
  state: DialogsPageType = initialState,
  action: ActionsTyps
) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return { ...state, newMessageBody: action.body };
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    }
    default:
      return state;
  }
};
export type ActionsTyps =
  | sendMessageActionType
  | updateNewMessageBodyActionType;

type sendMessageActionType = ReturnType<typeof sendMessageCreater>;
type updateNewMessageBodyActionType = ReturnType<
  typeof updateNewMessageBodyCreater
>;

export const sendMessageCreater = () => ({ type: SEND_MESSAGE } as const);
export const updateNewMessageBodyCreater = (body: string) =>
  ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  } as const);

export default dialogsReducer;
