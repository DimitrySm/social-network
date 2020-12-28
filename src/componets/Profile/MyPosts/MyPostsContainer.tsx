import React from "react";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "../../../redux/profileReducer";
import { StoreReduxType } from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type PropsType = {
  store: StoreReduxType;
};

const MyPostsContainer = (props: PropsType) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreater());
  };

  let onPostChange = (text: string | undefined) => {
    let action = updateNewPostTextActionCreater(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      postsData={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};
export default MyPostsContainer;
