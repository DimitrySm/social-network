/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { PostsDataType } from "../../../redux/profileReducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type PropsType = {
  updateNewPostText: (text: string | undefined) => void;
  addPost: () => void;
  postsData: Array<PostsDataType>;
  newPostText: string;
};

const MyPosts = (props: PropsType) => {
  let postsElements = props.postsData.map((p: PostsDataType) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current?.value;
    props.updateNewPostText(text);
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
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
