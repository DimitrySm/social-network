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
    // usersPage: {
    //   users: [
    //     {
    //       id: 1,
    //       photoUrl:
    //         "data:image/jpeg;base64,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",
    //       fullName: "Dmitry",
    //       status: "Programmer",
    //       location: { city: "Minsk", country: "Belarus" },
    //       followed: true,
    //     },
    //   ],
    // },
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
export type locationType = {
  city: string;
  country: string;
};

export type UserDataType = {
  id: number;
  photoUrl: string;
  fullName: string;
  status: string;
  location: locationType;
  followed: boolean;
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
export type UsersPageType = {
  users: Array<UserDataType>;
};
export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  // usersPage: UsersPageType;
};

export default store;
