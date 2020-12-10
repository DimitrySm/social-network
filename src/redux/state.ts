let rerenderEntireTree = (state: RootStateType) => {};

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

export let state: RootStateType = {
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
};

export const addPost = () => {
  let newPost: PostsDataType = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer: (state: RootStateType) => void) => {
  rerenderEntireTree = observer;
};

export default state;
