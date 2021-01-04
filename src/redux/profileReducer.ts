import { ActionsTyps, PostsDataType, ProfilePageType } from "./store";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 23 },
  ],
  newPostText: "it-kamasutra",
};

const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionsTyps
) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost: PostsDataType = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
};

export const addPostActionCreater = () =>
  ({
    type: ADD_POST,
  } as const);
export const updateNewPostTextActionCreater = (text: any) =>
  ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  } as const);

export default profileReducer;
