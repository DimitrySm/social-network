import React from "react";
import { PostsDataType, ProfilePageType } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type PropsType = {
  profilePage: ProfilePageType;
  newPostText: string;
  addPost: () => void;
  updateNewPostText: (text: string) => void;
};

const MyPosts = (props: PropsType) => {
  let postsElements = props.profilePage.postsData.map((p: PostsDataType) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    props.addPost();
    props.updateNewPostText("");
  };

  let onPostChange = () => {
    let text = newPostElement.current?.value;
    if (text) {
      props.updateNewPostText(text);
    }
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
