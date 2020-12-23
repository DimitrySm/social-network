import { ActionsTyps, PostsDataType, ProfilePageType } from "./state";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const profileReducer = (state: ProfilePageType, action: ActionsTyps) => {
  switch (action.type) {
    case ADD_POST:
      let newPost: PostsDataType = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
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
