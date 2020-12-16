const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let store = {
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
    },
  },
  _callSubscriber(state: RootStateType) {},

  getState() {
    return this._state;
  },
  subscribe(observer: (state: RootStateType) => void) {
    this._callSubscriber = observer;
  },

  dispatch(action: any) {
    if (action.type === ADD_POST) {
      let newPost: PostsDataType = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (text: any) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
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
};
export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
};

// let rerenderEntireTree = (state: RootStateType) => {};

// export let state: RootStateType = {
//   profilePage: {
//     postsData: [
//       { id: 1, message: "Hi, how are you?", likesCount: 12 },
//       { id: 2, message: "It's my first post", likesCount: 23 },
//     ],
//     newPostText: "it-kama",
//   },
//   dialogsPage: {
//     messagesData: [
//       { id: 1, message: "Hi" },
//       { id: 2, message: "Whats up?" },
//       { id: 3, message: "Shalalala" },
//     ],
//     dialogsData: [
//       { id: 1, name: "Dimas" },
//       { id: 2, name: "American Boy" },
//       { id: 3, name: "Koresh" },
//       { id: 4, name: "Avici" },
//       { id: 5, name: "Alinka" },
//       { id: 6, name: "Kosya" },
//       { id: 7, name: "Gayn" },
//     ],
//   },
// };

// export const addPost = () => {
//   let newPost: PostsDataType = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likesCount: 0,
//   };
//   state.profilePage.postsData.push(newPost);
//   state.profilePage.newPostText = "";
//   rerenderEntireTree(state);
// };

// export const updateNewPostText = (newText: string) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// };

// export const subscribe = (observer: (state: RootStateType) => void) => {
//   rerenderEntireTree = observer;
// };

export default store;
