import { userAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE-POST";

export type PostsDataType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ProfilePageType = {
  postsData: Array<PostsDataType>;
  newPostText: string;
  profile: any;
};

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 23 },
  ],
  newPostText: "it-kamasutra",
  profile: null,
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
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

type AddPostActionType = ReturnType<typeof addPostActionCreater>;
type UpdateNewPostTextActionType = ReturnType<
  typeof updateNewPostTextActionCreater
>;
type setUserProfileActionType = ReturnType<typeof setUserProfile>;

export type ActionsTyps =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | setUserProfileActionType;

export const addPostActionCreater = () =>
  ({
    type: ADD_POST,
  } as const);
export const updateNewPostTextActionCreater = (text: any) =>
  ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  } as const);
export const setUserProfile = (profile: any) =>
  ({
    type: SET_USER_PROFILE,
    profile,
  } as const);

export const getUserProfileThunkCreater = (userId: string) => {
  return (dispatch: (action: ActionsTyps) => void) => {
    userAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};
export default profileReducer;
