import React from "react";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "../../../redux/profileReducer";
import {
  ActionsTyps,
  PostsDataType,
  ProfilePageType,
} from "../../../redux/store";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type PropsType = {
  profilePage: ProfilePageType;
  newPostText: string;
  dispatch: (action: ActionsTyps) => void;
};

const MyPosts = (props: PropsType) => {
  let postsElements = props.profilePage.postsData.map((p: PostsDataType) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    debugger;
    props.dispatch(addPostActionCreater());
  };

  let onPostChange = () => {
    let text = newPostElement.current?.value;
    let action = updateNewPostTextActionCreater(text);
    props.dispatch(action);
  };

  return (
    <div>
      my post
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
