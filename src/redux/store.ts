import dialogsReducer, {
  sendMessageCreater,
  updateNewMessageBodyCreater,
} from "./dialogsReducer";
import profileReducer, {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "./profileReducer";

let store: StoreType = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 23 },
      ],
      newPostText: "it-kama",
    },
    dialogsPage: {
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
    },
  },
  _callSubscriber() {
    console.log("State Changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

///////////////// TYPE /////////////////////////////

type AddPostActionType = ReturnType<typeof addPostActionCreater>;
type UpdateNewPostTextActionType = ReturnType<
  typeof updateNewPostTextActionCreater
>;
type sendMessageActionType = ReturnType<typeof sendMessageCreater>;
type updateNewMessageBodyActionType = ReturnType<
  typeof updateNewMessageBodyCreater
>;

export type ActionsTyps =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | sendMessageActionType
  | updateNewMessageBodyActionType;

export type StoreType = {
  _state: RootStateType;
  _callSubscriber: (state: RootStateType) => void;
  getState: () => RootStateType;
  subscribe: (observer: () => void) => void;
  dispatch: (action: ActionsTyps) => void;
};
export type MessageItemType = {
  message: string;
};
export type MessagesDataType = {
  id: number;
  message: string;
};
export type DialogsDataType = {
  id: number;
  name: string;
};
export type PostsDataType = {
  id: number;
  message: string;
  likesCount: number;
};
export type ProfilePageType = {
  postsData: Array<PostsDataType>;
  newPostText: string;
};
export type DialogsPageType = {
  messagesData: Array<MessagesDataType>;
  dialogsData: Array<DialogsDataType>;
  newMessageBody: string;
};
export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
};

export default store;
